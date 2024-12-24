import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useAnimations, useGLTF } from '@react-three/drei';
import React from 'react';

const birdScene = '/models/bird/bird.glb';

export function Bird() {
  const birdRef = useRef();
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    actions['Take 001'].play();
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const paths = [
    (time) => ({
      y: 0 + Math.sin(time * 0.5) * 0.5,
      z: 1 + Math.cos(time * 0.5) * 0.5,
    }),
    (time) => ({
      y: 0 + Math.cos(time * 0.7) * 0.5,
      z: 1 + Math.sin(time * 0.7) * 0.5,
    }),
    (time) => ({
      y: 0 + Math.sin(time * 1.2) * 0.3,
      z: 1 + Math.cos(time * 1.5) * 0.3,
    }),
  ];

  const [selectedPath] = React.useState(
    () => paths[Math.floor(Math.random() * paths.length)]
  );

  const desktopStartingPositions = [
    [-26, -8, 1],
    [-26, -8, 2],
    [-26, -8, 0],
    [-26, -8, 3],
  ];

  const mobileStartingPositions = [
    [-13, -8, 1],
    [-13, -8, 2],
    [-13, -8, 0],
    [-13, -8, 3],
  ];

  const [startPosition] = React.useState(() => {
    const isMobile = window.innerWidth <= 768;
    const positions = isMobile ? mobileStartingPositions : desktopStartingPositions;
    return positions[Math.floor(Math.random() * positions.length)];
  });

  useFrame(({ clock, camera }) => {
    const time = clock.getElapsedTime();
    const path = selectedPath(time);

    birdRef.current.position.y = path.y;
    birdRef.current.position.z = path.z;

    //console.log('Bird position:', birdRef.current.position);

    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      if (birdRef.current.position.x > 15) {
        birdRef.current.rotation.y = Math.PI;
      } else if (birdRef.current.position.x < -13) {
        birdRef.current.rotation.y = 0;
      }
    } else {
      if (birdRef.current.position.x > camera.position.x + 32) {
        birdRef.current.rotation.y = Math.PI;
      } else if (birdRef.current.position.x < camera.position.x - 31) {
        birdRef.current.rotation.y = 0;
      }
    }

    if (birdRef.current.rotation.y === 0) {
      birdRef.current.position.x += 0.045;
    } else {
      birdRef.current.position.x -= 0.045;
    }
    //console.log('current position', birdRef.current.position.x);
  });

  return (
    <mesh ref={birdRef} position={startPosition} scale={[0.012, 0.012, 0.012]}>
      <primitive object={scene} />
    </mesh>
  );
}

export default Bird;
