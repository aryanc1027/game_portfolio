import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Monster from '../models/Monster';
import { projects } from '../constants/index';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';
import Loader from '../components/Loader';

export const Projects = () => {
  useEffect(() => {
    const handleScroll = () => {
      document.body.style.overflow = 'auto';
    };

    // Initial call
    handleScroll();

    // Add resize event listener
    window.addEventListener('resize', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleScroll);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <section className="min-h-[100dvh] bg-gradient-to-b from-[#1a1f35] to-[#2a2f45] px-4 sm:px-6 py-8 sm:py-16 relative pt-[60px]">

      <div className="absolute inset-0 z-0">
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
            <Monster />
          </Suspense>
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="glass-card mb-8 sm:mb-16 p-4 sm:p-8 text-center border border-white/5 bg-white/5">
          <p className="text-white/90 text-xl sm:text-2xl font-bold tracking-wide">
            Projects I've Worked On:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="glass-card p-4 sm:p-6 border border-white/5 bg-white/5 rounded-xl
                         shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                         transform-gpu
                         sm:hover:bg-white/10 sm:hover:shadow-[0_15px_30px_rgba(59,130,246,0.1)]
                         sm:hover:border-white/20 sm:hover:translate-y-[-4px]
                         transition-all duration-500"
            >
              <div className="flex items-center mb-3 sm:mb-4">
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${project.theme} flex justify-center items-center`}
                >
                  <img
                    src={project.iconUrl}
                    alt={project.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
                <h4 className="ml-3 sm:ml-4 text-lg sm:text-xl font-semibold text-white/90 truncate">
                  {project.name}
                </h4>
              </div>

              <p className="text-white/70 text-sm sm:text-base mb-3 sm:mb-4">
                {project.description}
              </p>

              <Link
                to={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm sm:text-base"
              >
                <span className="mr-2">View Project</span>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-3 h-3 sm:w-4 sm:h-4 object-contain"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
