import React from 'react';

export const About = () => {
  return (
    <section className="min-h-[100dvh] bg-gradient-to-b from-[#1a1f35] to-[#2a2f45] px-4 sm:px-6 py-8 sm:py-16 relative overflow-hidden pt-[60px]">
      {/* Header Section - Centered */}
      <div className="text-center mb-16 sm:mb-32">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 sm:mb-8">
          <span className="bg-gradient-to-r from-[#4d9cd9] to-[#9e69da] text-transparent bg-clip-text">
            Hey there! I'm Aryan Choudhary
          </span>
        </h1>
        <p className="text-white/70 text-lg sm:text-xl max-w-3xl mx-auto">
          Computer Science and Applied Mathematics double major at UNC Chapel
          Hill
        </p>
      </div>

      {/* Timeline Content */}
      <div className="max-w-4xl mx-auto relative">
        <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-px bg-white/10"></div>

        <div className="space-y-12 sm:space-y-24">
          {[
            {
              title: "Speedi Delivery",
              color: "bg-[#4d9cd9]",
              content: "As Chief Technology Officer, I've spearheaded numerous technological initiatives that have transformed our delivery operations. Through innovative solutions and strategic implementation, we've achieved remarkable growth, successfully completing over 10,000 deliveries in our first six months. This milestone not only demonstrates our operational efficiency but also highlights our commitment to providing reliable and swift delivery services to our community."
            },
            {
              title: "TechX",
              color: "bg-[#9e69da]",
              content: "In my role as Engineering Manager, I've taken on the responsibility of nurturing and developing the next generation of tech talent. I work closely with members to guide them through the complexities of full-stack development, ensuring they have the skills and confidence needed for successful demo day presentations. My approach combines hands-on technical mentorship with strategic project management, helping teams navigate challenges and deliver impressive results. Previously as Rush Chair, I played a crucial role in identifying and recruiting exceptional talent, contributing to the organization's growth and diversity."
            },
            {
              title: "The Art of Coffee",
              color: "bg-[#4d9cd9]",
              content: "My journey as a barista was more than just making coffee – it was an exploration into the artistry of beverage crafting. Each drink was a canvas where I could experiment with different flavors, textures, and presentations. From perfecting the delicate balance of a hand-crafted latte to creating custom drink combinations that delighted customers, I discovered that making coffee was as much about creativity as it was about precision. Training others became an opportunity to share this passion, showing them how small adjustments in technique could transform an ordinary drink into something extraordinary. This experience taught me that even in seemingly routine tasks, there's always room for innovation and personal expression."
            },
            {
              title: "Beyond School & Work",
              color: "bg-[#9e69da]",
              content: "Outside the world of technology, I find balance and creativity in swimming and cooking. The pool provides a space for reflection and physical challenge, while the kitchen has become my laboratory for creativity. In cooking, I've discovered parallels with programming – both require precision, creativity, and the ability to combine different elements into a harmonious whole. Whether I'm experimenting with new spice combinations or perfecting traditional recipes, I approach cooking with the same attention to detail and passion for innovation that I bring to my technical work."
            }
          ].map((item, index) => (
            <div key={index} className="relative sm:pl-20">
              <div className={`hidden sm:block absolute left-6 w-4 h-4 rounded-full ${item.color}`}></div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white/90 mb-3 sm:mb-6">
                {item.title}
              </h2>
              <p className="text-white/70 text-base sm:text-lg leading-relaxed">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
