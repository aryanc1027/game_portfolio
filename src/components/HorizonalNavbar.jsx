import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const HorizontalNavbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) { // Adjust this breakpoint as needed
        document.body.style.paddingTop = '60px'; // Adjust this value to match your navbar height
      } else {
        document.body.style.paddingTop = '10px';
      }

    };

    handleResize(); // Call once to set initial state
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.style.paddingTop = '0px';
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { to: "/about", text: "About ✨" },
    { to: "/projects", text: "Projects ⚙️" },
    { to: "/experience", text: "Experience ⚡" },
    { to: "/contact", text: "Contact ☕" },
  ];

  return (
    <>
      <nav
        className={`p-4 w-screen max-w-full bg-[#1a1f35] fixed top-0 left-0 z-[100] transition-transform duration-300 ${
          visible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex justify-between items-center w-full relative z-[102]">
          <Link
            to="/"
            className="text-white text-xl font-bold hover:text-[#9e69da]"
          >
            Home 🏠
          </Link>
          <div className="hidden md:flex">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className="text-white hover:text-[#9e69da] font-medium px-4 lg:px-8"
              >
                {item.text}
              </Link>
            ))}
          </div>
          <button
            className="md:hidden text-white focus:outline-none flex flex-col gap-1.5 bg-transparent border-none p-0 z-[102]"
            onClick={toggleMenu}
            style={{ background: 'none' }}
          >
            {isMenuOpen ? (
              <div className="relative w-6 h-6">
                <div className="absolute w-6 h-0.5 bg-white top-1/2 left-0 rotate-45"></div>
                <div className="absolute w-6 h-0.5 bg-white top-1/2 left-0 -rotate-45"></div>
              </div>
            ) : (
              <>
                <div className="w-6 h-0.5 bg-white"></div>
                <div className="w-6 h-0.5 bg-white"></div>
                <div className="w-6 h-0.5 bg-white"></div>
              </>
            )}
          </button>
        </div>
        <div 
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:hidden fixed top-0 left-0 w-screen h-screen bg-[#1a1f35] flex items-center justify-center z-[101]`}
        >
          <div className="flex flex-col items-center justify-center text-center w-full space-y-6">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className="text-white text-2xl hover:text-[#9e69da] font-medium transition-all duration-300 block py-1 w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default HorizontalNavbar;
