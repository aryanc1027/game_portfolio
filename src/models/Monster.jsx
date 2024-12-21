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

  useEffect(() => {
    if (actions['Take 001']) {
      actions['Take 001'].play();
    }
  }, [actions]);

  useFrame(() => {
    if (!monsterRef.current) return;

    monsterRef.current.position.x +=
      pathRef.current.speed * pathRef.current.direction;

    if (monsterRef.current.position.x >= 34) {
      pathRef.current.direction = -1;
      monsterRef.current.rotation.y = -Math.PI / 2;
    } else if (monsterRef.current.position.x <= -37) {
      pathRef.current.direction = 1;
      monsterRef.current.rotation.y = Math.PI / 2;
    }
    //console.log(monsterRef.current.position.x);
  });

  return (
    <mesh
      ref={monsterRef}
      position={[-37, -4, 0]}
      scale={[0.5, 0.5, 0.5]}
      rotation={[0, Math.PI / 2, 0]}
    >
      <primitive object={scene} />
    </mesh>
  );
}

export default Monster;
