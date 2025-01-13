import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useAnimations, useGLTF } from '@react-three/drei';

const monsterScene = '/models/monster/monster.glb';

export function Monster() {
  const monsterRef = useRef();
  const { scene, animations } = useGLTF(monsterScene);
  const { actions } = useAnimations(animations, monsterRef);
  const pathRef = useRef({
    direction: 1,
    speed: 0.035,
    maxX: 10,
    minX: -10,
  });

  // Update initial position for mobile users
  const isMobile = window.innerWidth <= 768; // Example condition for mobile
  const initialPositionX = isMobile ? -16 : -36; // Set initial position based on device
  const turnAroundX = isMobile ? 15 : 37; // Set turn around position based on device

  useEffect(() => {
    if (actions['Take 001']) {
      actions['Take 001'].play();
    }
  }, [actions]);

  useFrame(() => {
    if (!monsterRef.current) return;

    monsterRef.current.position.x +=
      pathRef.current.speed * pathRef.current.direction;
   // console.log('monster position:', monsterRef.current.position.x);

    // Update turn around conditions for mobile users
    if (monsterRef.current.position.x >= turnAroundX) {
      pathRef.current.direction = -1;
      monsterRef.current.rotation.y = -Math.PI / 2;
    } else if (monsterRef.current.position.x <= initialPositionX) {
      pathRef.current.direction = 1;
      monsterRef.current.rotation.y = Math.PI / 2;
    }
    //console.log(monsterRef.current.position.x);
  });

  return (
    <mesh
      ref={monsterRef}
      position={[initialPositionX, -6, 0]} // Update initial position
      scale={[0.5, 0.5, 0.5]}
      rotation={[0, Math.PI / 2, 0]}
    >
      <primitive object={scene} />
    </mesh>
  );
}

export default Monster;
