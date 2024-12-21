import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Monster from '../models/Monster';
import { projects } from '../constants/index';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';
import Loader from '../components/Loader';

export const Projects = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#1a1f35] to-[#2a2f45] px-6 py-16 relative">
      {/* 3D Monster Model */}
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
        <div className="glass-card mb-16 p-8 text-center border border-white/5 bg-white/5">
          <p className="text-white/90 text-2xl font-bold tracking-wide">
            Projects I've Worked On:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="glass-card p-6 border border-white/5 bg-white/5 rounded-xl
                         hover:bg-white/10 transition-all duration-500
                         shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                         hover:shadow-[0_15px_30px_rgba(59,130,246,0.1)]
                         hover:border-white/20
                         hover:translate-y-[-4px]"
            >
              <div className="flex items-center mb-4">
                <div
                  className={`w-12 h-12 rounded-xl ${project.theme} flex justify-center items-center`}
                >
                  <img
                    src={project.iconUrl}
                    alt={project.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
                <h4 className="ml-4 text-xl font-semibold text-white/90 truncate">
                  {project.name}
                </h4>
              </div>

              <p className="text-white/70 mb-4">{project.description}</p>

              <Link
                to={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                <span className="mr-2">View Project</span>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
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
