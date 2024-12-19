import { useKeyboardControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { CapsuleCollider, RigidBody, vec3 } from '@react-three/rapier';
import { useRef, useState, useEffect } from 'react';
import { Controls } from '../App';
import { pageStates, usePageStore } from '../store';
import Character from './Character';
import * as THREE from 'three';

const JUMP_FORCE = 0.5;
const MOVEMENT_SPEED = 0.1;
const MAX_VEL = 3;
const RUN_VEL = 1.5;
const TOUCH_SENSITIVITY = 0.05;

export const CharacterController = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState({ x: 0, z: 0 });
  const [touchMove, setTouchMove] = useState({ x: 0, z: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const { characterState, setCharacterState, currentPage } = usePageStore(
    (state) => ({
      characterState: state.characterState,
      setCharacterState: state.setCharacterState,
      currentPage: state.currentPage,
    })
  );

  // Check if device is mobile
  useEffect(() => {
    setIsMobile('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  // Keyboard controls
  const jumpPressed = useKeyboardControls((state) => state[Controls.jump]);
  const leftPressed = useKeyboardControls((state) => state[Controls.left]);
  const rightPressed = useKeyboardControls((state) => state[Controls.right]);
  const backPressed = useKeyboardControls((state) => state[Controls.back]);
  const forwardPressed = useKeyboardControls(
    (state) => state[Controls.forward]
  );

  const rigidbody = useRef();
  const isOnFloor = useRef(true);
  const character = useRef();

  // Touch event handlers
  const handleTouchStart = (event) => {
    const touch = event.touches[0];
    setTouchStart({ x: touch.clientX, z: touch.clientY });
    setTouchMove({ x: touch.clientX, z: touch.clientY });
    setIsDragging(true);
  };

  const handleTouchMove = (event) => {
    if (!isDragging) return;
    const touch = event.touches[0];
    setTouchMove({ x: touch.clientX, z: touch.clientY });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Add touch event listeners
  useEffect(() => {
    if (isMobile) {
      window.addEventListener('touchstart', handleTouchStart);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleTouchEnd);

      return () => {
        window.removeEventListener('touchstart', handleTouchStart);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [isMobile]);

  useFrame((state, delta) => {
    const impulse = { x: 0, y: 0, z: 0 };
    let changeRotation = false;

    if (isMobile && isDragging) {
      // Mobile controls
      const deltaX = (touchMove.x - touchStart.x) * TOUCH_SENSITIVITY;
      const deltaZ = (touchMove.z - touchStart.z) * TOUCH_SENSITIVITY;

      if (Math.abs(deltaX) > 0.001 || Math.abs(deltaZ) > 0.001) {
        impulse.x = deltaX;
        impulse.z = deltaZ;
        changeRotation = true;
      }
    } else {
      // Keyboard controls
      const linvel = rigidbody.current.linvel();

      if (jumpPressed && isOnFloor.current) {
        impulse.y += JUMP_FORCE;
        isOnFloor.current = false;
      }

      if (rightPressed && linvel.x < MAX_VEL) {
        impulse.x += MOVEMENT_SPEED;
        changeRotation = true;
      }
      if (leftPressed && linvel.x > -MAX_VEL) {
        impulse.x -= MOVEMENT_SPEED;
        changeRotation = true;
      }
      if (backPressed && linvel.z < MAX_VEL) {
        impulse.z += MOVEMENT_SPEED;
        changeRotation = true;
      }
      if (forwardPressed && linvel.z > -MAX_VEL) {
        impulse.z -= MOVEMENT_SPEED;
        changeRotation = true;
      }
    }

    // Apply movement
    rigidbody.current.applyImpulse(impulse, true);
    const linvel = rigidbody.current.linvel();

    // Update character state
    if (Math.abs(linvel.x) > RUN_VEL || Math.abs(linvel.z) > RUN_VEL) {
      if (characterState !== 'Run') {
        setCharacterState('Run');
      }
    } else {
      if (characterState !== 'Idle') {
        setCharacterState('Idle');
      }
    }

    // Update character rotation
    if (changeRotation) {
      const angle = Math.atan2(linvel.x, linvel.z);
      character.current.rotation.y = angle;
    }

    // Camera follow
    const characterWorldPosition = character.current.getWorldPosition(
      new THREE.Vector3()
    );

    const targetCameraPosition = new THREE.Vector3(
      characterWorldPosition.x,
      currentPage === pageStates.CONTENT ? 6 : 0,
      characterWorldPosition.z + 14
    );

    state.camera.position.lerp(targetCameraPosition, delta * 2);

    const targetLookAt = new THREE.Vector3(
      characterWorldPosition.x,
      0,
      characterWorldPosition.z
    );

    const direction = new THREE.Vector3();
    state.camera.getWorldDirection(direction);

    const position = new THREE.Vector3();
    state.camera.getWorldPosition(position);

    const currentLookAt = position.clone().add(direction);
    const lerpedLookAt = new THREE.Vector3();

    lerpedLookAt.lerpVectors(currentLookAt, targetLookAt, delta * 2);
    state.camera.lookAt(lerpedLookAt);
  });

  const resetPosition = () => {
    rigidbody.current.setTranslation(vec3({ x: 0, y: 0, z: 0 }));
    rigidbody.current.setLinvel(vec3({ x: 0, y: 0, z: 0 }));
  };

  return (
    <group>
      <RigidBody
        ref={rigidbody}
        colliders={false}
        scale={[0.5, 0.5, 0.5]}
        enabledRotations={[false, false, false]}
        onCollisionEnter={() => {
          isOnFloor.current = true;
        }}
        onIntersectionEnter={({ other }) => {
          if (other.rigidBodyObject.name === 'void') {
            resetPosition();
          }
        }}
      >
        <CapsuleCollider args={[0.8, 0.4]} position={[0, 1.2, 0]} />
        <group ref={character}>
          <Character />
        </group>
      </RigidBody>
    </group>
  );
};
