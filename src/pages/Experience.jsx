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
    <section className="min-h-screen bg-gradient-to-b from-[#1a1f35] to-[#2a2f45] px-4 sm:px-6 pt-8 pb-8 sm:py-16">
      <div className="fixed inset-0 z-0">
        {/* Any background Canvas or 3D elements should go here */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="glass-card mb-6 sm:mb-16 p-4 sm:p-8 text-center border border-white/5 bg-white/5">
          <p className="text-white/90 text-xl sm:text-2xl font-bold tracking-wide">
            Technologies, Frameworks, and Languages I've worked with:
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-4 md:gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-bubble">
              <div
                className="relative aspect-square rounded-xl sm:rounded-2xl bg-[#1a1f35]/80 
                            border border-white/10
                            sm:hover:bg-white/10 transition-all duration-500 p-3 sm:p-6
                            shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                            sm:hover:shadow-[0_15px_30px_rgba(59,130,246,0.1)]
                            sm:hover:border-white/20
                            sm:hover:translate-y-[-4px]
                            group"
              >
                <div className="flex justify-center items-center h-full">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-2/3 sm:w-3/5 h-2/3 sm:h-3/5 object-contain transition-all duration-500
                             sm:group-hover:scale-110 sm:group-hover:brightness-110"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 sm:mt-32 relative z-10">
        <h3 className="text-white text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-16 tracking-tight">
          Work Experience
        </h3>

        <div className="glass-card mb-8 sm:mb-16 p-4 sm:p-8 border border-white/5 bg-white/5">
          <p className="text-white/90 text-base sm:text-lg text-center font-light tracking-wide">
            I've worked with a variety of companies and organizations level up
            my skills. Here's the rundown:
          </p>
        </div>

        <VerticalTimeline lineColor={'rgba(255, 255, 255, 0.1)'}>
          {experiences.map((experience) => (
            <VerticalTimelineElement
              key={experience.company_name}
              dateClassName="text-white/60 font-light tracking-wide text-sm sm:text-base"
              iconStyle={{
                background: 'white',
                boxShadow: '0 0 0 4px rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(12px)',
              }}
              contentStyle={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(12px)',
                borderRadius: '12px sm:16px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)',
                padding: '1.5rem sm:2rem',
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
              <div className="text-white space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold tracking-wide">
                  {experience.title}
                </h3>
                <p className="font-medium opacity-80 text-sm sm:text-base">
                  {experience.company_name === 'CS-XL' 
                    ? 'No link available' 
                    : experience.company_name}
                </p>
                <ul className="space-y-2 sm:space-y-3 mt-4 sm:mt-6">
                  {experience.points.map((point, index) => (
                    <li
                      key={index}
                      className="text-xs sm:text-sm opacity-70 pl-3 sm:pl-4 border-l border-white/20
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
