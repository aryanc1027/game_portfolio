import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Bird from '../models/Bird';
import Loader from '../components/Loader';

const Contact = () => {
  return (
    <div className="relative bg-[#20b2aa] p-8 flex items-center justify-center min-h-screen">
      <div className="absolute top-0 left-0 w-full h-full z-[1]">
        <Canvas
          orthographic
          camera={{
            zoom: 50,
            position: [0, 0, 100],
            near: 0.1,
            far: 1000
          }}
        >
          <Suspense fallback={<Loader />}>
            <directionalLight position={[-1, 5, 2]} intensity={1.5} />
            <ambientLight intensity={0.5} />
            <Bird />
          </Suspense>
        </Canvas>
      </div>

      <div className="max-w-4xl w-full backdrop-blur-sm bg-white/10 rounded-3xl p-12 text-white relative z-[2]">
        <h1 className="text-5xl font-bold mb-12 text-center">Let's Connect!</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
          {/* Email Section */}
          <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 hover:bg-white/10 
            transition-all duration-300 hover:scale-105 hover:translate-y-[-8px] hover:shadow-xl">
            <h2 className="text-3xl font-semibold mb-6">Email</h2>
            <div className="space-y-3">
              <a href="mailto:aryanc@unc.edu" 
                className="block text-xl hover:text-[#9e69da] transition-colors">
                aryanc@unc.edu
              </a>
              <a href="mailto:aryanc1027@gmail.com" 
                className="block text-xl hover:text-[#9e69da] transition-colors">
                aryanc1027@gmail.com
              </a>
            </div>
          </div>

          {/* LinkedIn Section */}
          <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 hover:bg-white/10 
            transition-all duration-300 hover:scale-105 hover:translate-y-[-8px] hover:shadow-xl">
            <h2 className="text-3xl font-semibold mb-6">LinkedIn</h2>
            <a href="https://www.linkedin.com/in/aryanc1027/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xl hover:text-[#9e69da] transition-colors">
              Connect with me →
            </a>
          </div>

          {/* GitHub Section */}
          <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 hover:bg-white/10 
            transition-all duration-300 hover:scale-105 hover:translate-y-[-8px] hover:shadow-xl">
            <h2 className="text-3xl font-semibold mb-6">GitHub</h2>
            <a href="https://github.com/aryanc1027" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xl hover:text-[#9e69da] transition-colors">
              View my projects →
            </a>
          </div>

          {/* Quick Message Section */}
          <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 hover:bg-white/10 
            transition-all duration-300 hover:scale-105 hover:translate-y-[-8px] hover:shadow-xl">
            <h2 className="text-3xl font-semibold mb-6">Quick Message</h2>
            <a href="mailto:aryanc1027@gmail.com" 
              className="text-xl hover:text-[#9e69da] transition-colors">
              Send a hello! ✨ →
            </a>
          </div>
        </div>
        
        {/* Subtle line and old portfolio link underneath */}
        <div className="text-center text-white/60 text-sm border-t border-white/10 pt-4">
          <a href="https://aryan-room-portfolio.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[#9e69da] transition-colors">
            View previous portfolio →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
