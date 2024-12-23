import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Bird from '../models/Bird';
import Loader from '../components/Loader';

const Contact = () => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    };

    handleScroll();
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('resize', handleScroll);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-[#1a1f35] to-[#2a2f45] min-h-screen md:h-screen">
      <div className="absolute top-0 left-0 w-full h-full z-[1]">
        <Canvas
          orthographic
          camera={{
            zoom: 50,
            position: [0, 0, 100],
            near: 0.1,
            far: 1000,
          }}
        >
          <Suspense fallback={<Loader />}>
            <directionalLight position={[-1, 5, 2]} intensity={1.5} />
            <ambientLight intensity={0.5} />
            <Bird />
          </Suspense>
        </Canvas>
      </div>

      <div className="relative z-[2] w-full h-full py-16 md:py-0 px-4 md:px-8 flex items-start md:items-center justify-center">
        <div className="max-w-4xl w-full backdrop-blur-sm bg-white/10 rounded-3xl p-6 md:p-12 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center">Let's Connect!</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-8">
            {/* Email Section */}
            <div
              className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 md:p-8 hover:bg-white/10 
              transition-all duration-300 hover:scale-105 hover:translate-y-[-8px] hover:shadow-xl"
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6">Email</h2>
              <div className="space-y-2 md:space-y-3">
                <a
                  href="mailto:aryanc@unc.edu"
                  className="block text-lg md:text-xl hover:text-[#9e69da] transition-colors"
                >
                  aryanc@unc.edu
                </a>
                <a
                  href="mailto:aryanc1027@gmail.com"
                  className="block text-lg md:text-xl hover:text-[#9e69da] transition-colors"
                >
                  aryanc1027@gmail.com
                </a>
              </div>
            </div>

            {/* LinkedIn Section */}
            <div
              className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 md:p-8 hover:bg-white/10 
              transition-all duration-300 hover:scale-105 hover:translate-y-[-8px] hover:shadow-xl"
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6">LinkedIn</h2>
              <a
                href="https://www.linkedin.com/in/aryanc1027/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg md:text-xl hover:text-[#9e69da] transition-colors"
              >
                Connect with me →
              </a>
            </div>

            {/* GitHub Section */}
            <div
              className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 md:p-8 hover:bg-white/10 
              transition-all duration-300 hover:scale-105 hover:translate-y-[-8px] hover:shadow-xl"
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6">GitHub</h2>
              <a
                href="https://github.com/aryanc1027"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg md:text-xl hover:text-[#9e69da] transition-colors"
              >
                View my projects →
              </a>
            </div>

            {/* Quick Message Section */}
            <div
              className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 md:p-8 hover:bg-white/10 
              transition-all duration-300 hover:scale-105 hover:translate-y-[-8px] hover:shadow-xl"
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6">Quick Message</h2>
              <a
                href="mailto:aryanc1027@gmail.com"
                className="text-lg md:text-xl hover:text-[#9e69da] transition-colors"
              >
                Send a hello! ✨ →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
