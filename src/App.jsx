import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { KeyboardControls, Loader, useFont } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';
import { Leva } from 'leva';
import { Suspense } from 'react';
import { Experience } from './components/Experience';
import { Menu } from './components/Menu';
import { VerticalNavbar } from './components/VerticalNavbar';
import { HorizontalNavbar } from './components/HorizonalNavbar.jsx';
import Contact from './pages/Contact';

export const Controls = {
  forward: 'forward',
  back: 'back',
  left: 'left',
  right: 'right',
  jump: 'jump',
};

function AppContent() {
  const location = useLocation();

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
    <>
      {location.pathname === '/' ? (
         <VerticalNavbar />
      ) : (
        <HorizontalNavbar />
      )}
      <Routes>
        <Route
          path="/"
          element={
            <KeyboardControls map={map}>
              <Leva hidden />
              <Canvas shadows camera={{ position: [0, 20, 14], fov: 42 }}>
                <color attach="background" args={['#20b2aa']} />
                <Suspense fallback={null}>
                  <Physics>
                    <Experience  />
                  </Physics>
                </Suspense>
              </Canvas>
              <Loader />
              <Menu />
            </KeyboardControls>
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
