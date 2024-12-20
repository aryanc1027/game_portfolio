import React, { useRef } from 'react';
import { Center, Cylinder, Sphere, Text3D } from '@react-three/drei';
import { CylinderCollider, RigidBody } from '@react-three/rapier';
import { useControls } from 'leva';
import { usePageStore } from '../store';
import { Vector3 } from 'three';

export const Bubble = () => {
  const { level, currentStage, navigateTo } = usePageStore((state) => ({
    level: [
      [
        { id: 'portfolio', label: '⚙' },
        { id: 'about', label: '✨' },
        { id: 'experience', label: '⚡' },
        { id: 'contact', label: '☕' },
      ],
    ],
    currentStage: 0,
    navigateTo: state.navigateTo,
  }));

  const navigationSymbols = {
    portfolio: '⚙',
    about: '✨',
    experience: '⚡',
    contact: '☕',
  };

  const config = useControls({
    meshPhysicalMaterial: false,
    transmissionSampler: false,
    backside: false,
    samples: { value: 10, min: 1, max: 32, step: 1 },
    resolution: { value: 1024, min: 256, max: 2048, step: 256 },
    transmission: { value: 1, min: 0, max: 1 },
    roughness: { value: 0.0, min: 0, max: 1, step: 0.01 },
    thickness: { value: 0, min: 0, max: 10, step: 0.01 },
    ior: { value: 1, min: 1, max: 5, step: 0.01 },
    chromaticAberration: { value: 0, min: 0, max: 1 },
    anisotropy: { value: 0, min: 0, max: 1, step: 0.01 },
    distortion: { value: 0.0, min: 0, max: 1, step: 0.01 },
    distortionScale: { value: 0.01, min: 0.01, max: 1, step: 0.01 },
    temporalDistortion: { value: 0, min: 0, max: 1, step: 0.01 },
    clearcoat: { value: 1, min: 0, max: 1 },
    attenuationDistance: { value: 1, min: 0, max: 10, step: 0.01 },
    attenuationColor: '#ffffff',
    color: '#b8d8fb',
    bg: '#ffffff',
  });

  return (
    <group>
      {level[currentStage].map((item, index) => (
        <group
          key={`${currentStage}-${item.id}`}
          rotation-y={(index / level[currentStage].length) * Math.PI * 2}
        >
          <group position-x={3.5} position-z={-3.5}>
            {/* Add text label above the sphere */}
            <Center position-y={2.5} position-x={0.1}>
              <Text3D
                font={'./fonts/font.json'}
                size={0.4}
                rotation-y={
                  -(index / level[currentStage].length) * Math.PI * 2 +
                  (item.id === 'experience' || item.id === 'about'
                    ? 0.4 
                    : item.id === 'portfolio' || item.id === 'contact'
                      ? -0.4 
                      : 0) 
                }
                position-x={
                  item.id === 'portfolio'
                    ? 0
                    : item.id === 'about'
                      ? -1.4
                      : item.id === 'experience'
                        ? -0.2
                        : item.id === 'contact'
                          ? -0.4
                          : 0
                }
                position-z={
                  item.id === 'about'
                    ? 0.06
                    : item.id === 'experience'
                      ? -1.3
                      : item.id === 'contact'
                        ? -0.2
                        : item.id === 'portfolio'
                          ? -0.4
                          : 0
                }
              >
                {item.id === 'about' ? 'ABOUT ME' : item.id.toUpperCase()}
                <meshStandardMaterial
                  color="#ebbe89"
                  metalness={0.5}
                  roughness={0.2}
                />
              </Text3D>
            </Center>

            <RigidBody
              colliders={false}
              type="fixed"
              onCollisionEnter={() => navigateTo(item.id)}
            >
              <CylinderCollider args={[0.25 / 2, 1]} />
              <Cylinder scale={[1, 0.25, 1]}>
                <meshStandardMaterial color="white" />
              </Cylinder>
            </RigidBody>
            <Sphere scale={[1.22, 1.22, 1.22]} position={[0, 0.8, 0]}>
              <meshPhysicalMaterial {...config} />
            </Sphere>
            <Center position-y={0.8}>
              <Text3D
                font={'./fonts/font_main.json'}
                size={0.8}
                rotation-y={-(index / level[currentStage].length) * Math.PI * 2}
              >
                {navigationSymbols[item.id]}
                <meshStandardMaterial color="#ebbe89" toneMapped={false} />
              </Text3D>
            </Center>
          </group>
        </group>
      ))}
    </group>
  );
};
