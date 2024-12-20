import { ContactShadows, Environment, Text } from '@react-three/drei';
import {
  CuboidCollider,
  CylinderCollider,
  RigidBody,
} from '@react-three/rapier';
import { usePageStore } from '../store';
import { CharacterController } from './CharacterController';
import { Bubble } from './Bubble';
import { Stage } from './Stage';
import { useState, useEffect, useRef } from 'react';

export const Experience = () => {
  const [hasPlayerMoved, setHasPlayerMoved] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { currentSection } = usePageStore((state) => ({
    currentSection: state.activeSection,
  }));
  //.log(currentSection);
  useEffect(() => {
    const handleKeyDown = (e) => {
      const movementKeys = [
        'w',
        'a',
        's',
        'd',
        'ArrowUp',
        'ArrowDown',
        'ArrowLeft',
        'ArrowRight',
        'Space',
      ];
      if (movementKeys.includes(e.key.toLowerCase())) {
        setHasPlayerMoved(true);
        window.removeEventListener('keydown', handleKeyDown);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getTimeBasedGreeting = () => {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
      return 'Good Morning!';
    } else if (hour >= 12 && hour < 17) {
      return 'Good Afternoon!';
    } else {
      return 'Good Evening!';
    }
  };

  return (
    <>
      <Environment preset="sunset" />
      <directionalLight
        position={[5, 5, 5]}
        intensity={0.3}
        castShadow
        color={'#9e69da'}
      />

      {/* Movement Prompt */}
      {!hasPlayerMoved && currentSection === 'portfolio' && (
        <Text
          position={[0, 3, -3]}
          fontSize={window.innerWidth < 768 ? 0.25 : 0.4}
          font="./fonts/Poppins-ExtraBold.ttf"
        >
          {window.innerWidth < 768
            ? 'Hold Screen & Drag to Move'
            : 'Use WASD or Arrow Keys to Move'}
          <meshStandardMaterial color={'black'} opacity={1} transparent />
          <Text
            position={[0, -0.4, 0]}
            fontSize={window.innerWidth < 768 ? 0.17 : 0.27}
            font="./fonts/Poppins-ExtraBold.ttf"
          >
            Run into the bubbles to explore
            <meshStandardMaterial color={'white'} opacity={1} transparent />
          </Text>
        </Text>
      )}
      {/* Time-based Greeting */}
      <Text
        position={[0, -0.92, 0]}
        fontSize={0.7}
        rotation-x={-Math.PI / 2}
        font="./fonts/Poppins-ExtraBold.ttf"
      >
        {getTimeBasedGreeting()}
        <meshStandardMaterial color={'white'} opacity={0.6} transparent />
      </Text>
      <group position-y={-1}>
        {/* FLOOR */}
        <RigidBody colliders={false} type="fixed" name="void">
          <mesh position={[0, -0.9, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[50, 50]} />
            <meshBasicMaterial color="#2a2f45" toneMapped={false} />
          </mesh>
          <CuboidCollider position={[0, -3.5, 0]} args={[50, 0.1, 50]} sensor />
        </RigidBody>
        <ContactShadows
          frames={1}
          position={[0, -0.88, 0]}
          scale={80}
          opacity={0.42}
          far={50}
          blur={0.8}
          color={'#aa9acd'}
        />
        {/* STAGE */}
        <Stage position-y={-0.92} />
        <RigidBody
          colliders={false}
          type="fixed"
          position-y={-0.5}
          friction={2}
        >
          <CylinderCollider args={[1 / 2, 5]} />
        </RigidBody>

        {/* CHARACTER */}
        <CharacterController />

        {/* NAVIGATION */}
        <Bubble />
      </group>
    </>
  );
};
