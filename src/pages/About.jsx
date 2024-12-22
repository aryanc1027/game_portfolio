import React from 'react';

export const About = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#1a1f35] to-[#2a2f45] px-6 py-16 relative overflow-hidden">
      {/* Header Section - Centered */}
      <div className="text-center mb-32">
        <h1 className="text-6xl font-bold mb-8">
          <span className="bg-gradient-to-r from-[#4d9cd9] to-[#9e69da] text-transparent bg-clip-text">
            Hey there! I'm Aryan Choudhary
          </span>
        </h1>
        <p className="text-white/70 text-xl max-w-3xl mx-auto">
          Computer Science and Applied Mathematics double major at UNC Chapel
          Hill, passionate about problem-solving and exploring the intersection
          of technology and human interaction.
        </p>
      </div>

      {/* Timeline Content */}
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute left-8 top-0 bottom-0 w-px bg-white/10"></div>

        <div className="space-y-24">
          <div className="relative pl-20">
            <div className="absolute left-6 w-4 h-4 rounded-full bg-[#4d9cd9]"></div>
            <h2 className="text-3xl font-bold text-white/90 mb-6">
              Speedi Delivery
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              As Chief Technology Officer, I've spearheaded numerous
              technological initiatives that have transformed our delivery
              operations. Through innovative solutions and strategic
              implementation, we've achieved remarkable growth, successfully
              completing over 10,000 deliveries in our first six months. This
              milestone not only demonstrates our operational efficiency but
              also highlights our commitment to providing reliable and swift
              delivery services to our community. My role involves overseeing
              the entire technical infrastructure, from optimizing delivery
              routes to implementing real-time tracking systems.
            </p>
          </div>

          <div className="relative pl-20">
            <div className="absolute left-6 w-4 h-4 rounded-full bg-[#9e69da]"></div>
            <h2 className="text-3xl font-bold text-white/90 mb-6">TechX</h2>
            <p className="text-white/70 text-lg leading-relaxed">
              In my role as Engineering Manager, I've taken on the
              responsibility of nurturing and developing the next generation of
              tech talent. I work closely with members to guide them through the
              complexities of full-stack development, ensuring they have the
              skills and confidence needed for successful demo day
              presentations. My approach combines hands-on technical mentorship
              with strategic project management, helping teams navigate
              challenges and deliver impressive results. Previously as Rush
              Chair, I played a crucial role in identifying and recruiting
              exceptional talent, contributing to the organization's growth and
              diversity.
            </p>
          </div>

          <div className="relative pl-20">
            <div className="absolute left-6 w-4 h-4 rounded-full bg-[#4d9cd9]"></div>
            <h2 className="text-3xl font-bold text-white/90 mb-6">
              The Art of Coffee
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              My journey at Starbucks was more than just making coffee – it was
              an exploration into the artistry of beverage crafting. Each drink
              was a canvas where I could experiment with different flavors,
              textures, and presentations. From perfecting the delicate balance
              of a hand-crafted latte to creating custom drink combinations that
              delighted customers, I discovered that making coffee was as much
              about creativity as it was about precision. Training others became
              an opportunity to share this passion, showing them how small
              adjustments in technique could transform an ordinary drink into
              something extraordinary. This experience taught me that even in
              seemingly routine tasks, there's always room for innovation and
              personal expression.
            </p>
          </div>

          <div className="relative pl-20">
            <div className="absolute left-6 w-4 h-4 rounded-full bg-[#9e69da]"></div>
            <h2 className="text-3xl font-bold text-white/90 mb-6">
              Beyond School & Work
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              Outside the world of technology, I find balance and creativity in
              swimming and cooking. The pool provides a space for reflection and
              physical challenge, while the kitchen has become my laboratory for
              creativity. In cooking, I've discovered parallels with programming
              – both require precision, creativity, and the ability to combine
              different elements into a harmonious whole. Whether I'm
              experimenting with new spice combinations or perfecting
              traditional recipes, I approach cooking with the same attention to
              detail and passion for innovation that I bring to my technical
              work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
