import React from 'react';
import { skills, experiences } from '../constants/index';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../index.css';

export const Experience = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#1a1f35] to-[#2a2f45] px-6 py-16 relative">
      {/* Ambient background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(66,71,91,0.3),transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="glass-card mb-16 p-8 text-center border border-white/5 bg-white/5">
          <p className="text-white/90 text-2xl font-bold tracking-wide">
            Technologies, Frameworks, and Languages I've worked with:
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-bubble">
              <div
                className="relative aspect-square rounded-2xl bg-white/5 
                            backdrop-blur-md border border-white/10
                            hover:bg-white/10 transition-all duration-500 p-6
                            shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                            hover:shadow-[0_15px_30px_rgba(59,130,246,0.1)]
                            hover:border-white/20
                            hover:translate-y-[-4px]
                            group"
              >
                <div className="flex justify-center items-center h-full">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-3/5 h-3/5 object-contain transition-all duration-500
                             group-hover:scale-110 group-hover:brightness-110"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-32 relative z-10">
        <h3 className="text-white text-4xl font-bold text-center mb-16 tracking-tight">
          Work Experience
        </h3>

        <div className="glass-card mb-16 p-8 border border-white/5 bg-white/5">
          <p className="text-white/90 text-lg text-center font-light tracking-wide">
            I've worked with a variety of companies and organizations level up
            my skills. Here's the rundown:
          </p>
        </div>

        <VerticalTimeline lineColor={'rgba(255, 255, 255, 0.1)'}>
          {experiences.map((experience) => (
            <VerticalTimelineElement
              key={experience.company_name}
              dateClassName="text-white/60 font-light tracking-wide"
              iconStyle={{
                background: 'white',
                boxShadow: '0 0 0 4px rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(12px)',
              }}
              contentStyle={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(12px)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)',
                padding: '2rem',
              }}
              contentArrowStyle={{
                borderRight: '7px solid rgba(255, 255, 255, 0.05)',
              }}
              icon={
                <div className="flex justify-center items-center w-full h-full p-2">
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className="w-[60%] h-[60%] object-contain"
                  />
                </div>
              }
            >
              <div className="text-white space-y-4">
                <h3 className="text-xl font-semibold tracking-wide">
                  {experience.title}
                </h3>
                <p className="font-medium opacity-80">
                  {experience.company_name}
                </p>
                <ul className="space-y-3 mt-6">
                  {experience.points.map((point, index) => (
                    <li
                      key={index}
                      className="text-sm opacity-70 pl-4 border-l border-white/20
                       hover:border-white/40 transition-colors duration-300
                       font-light tracking-wide leading-relaxed"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
