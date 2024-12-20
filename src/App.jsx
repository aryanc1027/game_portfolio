import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { KeyboardControls, Loader, useFont } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';
import { Leva } from 'leva';
import { Suspense, useMemo } from 'react';
import { Experience } from './components/Experience';
import { Menu } from './components/Menu';
import { Navbar } from './components/Navbar';
import { Routes, Route } from 'react-router-dom';

export const Controls = {
  forward: 'forward',
  back: 'back',
  left: 'left',
  right: 'right',
  jump: 'jump',
};

function App() {
  useFont.preload('./fonts/font.json');
  const map = useMemo(
    () => [
      { name: Controls.forward, keys: ['ArrowUp', 'KeyW'] },
      { name: Controls.back, keys: ['ArrowDown', 'KeyS'] },
      { name: Controls.left, keys: ['ArrowLeft', 'KeyA'] },
      { name: Controls.right, keys: ['ArrowRight', 'KeyD'] },
      { name: Controls.jump, keys: ['Space'] },
    ],
    []
  );

  return (
    <Router>
      <KeyboardControls map={map}>
        <Leva hidden />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Canvas shadows camera={{ position: [0, 20, 14], fov: 42 }}>
                <color attach="background" args={['#20b2aa']} />
                <Suspense fallback={null}>
                  <Physics>
                    <Experience />
                  </Physics>
                </Suspense>
              </Canvas>
            }
          />
        </Routes>
        <Loader />
        <Menu />
      </KeyboardControls>
    </Router>
  );
}

export default App;
