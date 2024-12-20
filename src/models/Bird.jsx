import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";
import React from 'react';

const birdScene = '/models/bird/bird.glb'

export function Bird() {
  const birdRef = useRef();
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    actions["Take 001"].play();
  }, []);

  const paths = [
    (time) => ({
      y: 3 + Math.sin(time * 0.5) * 0.5,
      z: 1 + Math.cos(time * 0.5) * 0.5,
    }),
    (time) => ({
      y: 3 + Math.cos(time * 0.7) * 0.5,
      z: 1 + Math.sin(time * 0.7) * 0.5,
    }),
    (time) => ({
      y: 3 + Math.sin(time * 1.2) * 0.3,
      z: 1 + Math.cos(time * 1.5) * 0.3,
    }),
  ];
  
  const [selectedPath] = React.useState(() => paths[Math.floor(Math.random() * paths.length)]);
  

  const startingPositions = [
    [-27, 3, 1],
    [-20, -3, 2],
    [-25, 5, 0],
    [-22, -5, 3]
  ];
  

  const [startPosition] = React.useState(() => startingPositions[Math.floor(Math.random() * startingPositions.length)]);
  
  useFrame(({ clock, camera }) => {
    const time = clock.getElapsedTime();
    const path = selectedPath(time);
  
    birdRef.current.position.y = path.y;
    birdRef.current.position.z = path.z;
  
    if (birdRef.current.position.x > camera.position.x + 28) {
      birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current.position.x < camera.position.x - 31) {
      birdRef.current.rotation.y = 0;
    }
  
    if (birdRef.current.rotation.y === 0) {
      birdRef.current.position.x += 0.045;
    } else {
      birdRef.current.position.x -= 0.045;
    }
  });

  return (
    <mesh ref={birdRef} position={startPosition} scale={[0.012, 0.012, 0.012]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
