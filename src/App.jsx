import React, { useState, useMemo, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { KeyboardControls, Loader, useFont } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';
import { Leva } from 'leva';
import { Suspense } from 'react';
import { Experience } from './components/Experience';
import { Menu } from './components/Menu';
import { VerticalNavbar } from './components/VerticalNavbar';
import { HorizontalNavbar } from './components/HorizonalNavbar.jsx';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import Contact from './pages/Contact';
import Experience_Page from './pages/Experience';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"




export const Controls = {
  forward: 'forward',
  back: 'back',
  left: 'left',
  right: 'right',
  jump: 'jump',
};

function AppContent() {
  const location = useLocation();
  //const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // useEffect(() => {
  //   if (isMobile) {
  //     window.location.href = 'https://aryan-room-portfolio.vercel.app/';
  //   }
  // }, [isMobile]);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth < 768);
  //   };

  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

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
      {location.pathname === '/' ? <VerticalNavbar /> : <HorizontalNavbar />}
      <Routes>
        <Route
          path="/"
          element={
            <KeyboardControls map={map}>
              <Leva hidden />
              <Canvas shadows camera={{ position: [0, 20, 14], fov: 42 }}>
                <color attach="background" args={['#2a2f45']} />
                <Suspense fallback={null}>
                  <Physics>
                    <Experience />
                  </Physics>
                </Suspense>
              </Canvas>
              <Loader />
              <Menu />
            </KeyboardControls>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience_Page />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
      <Analytics />
      <SpeedInsights />
    </Router>
  );
}

export default App;
