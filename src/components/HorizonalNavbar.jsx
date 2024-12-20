import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const HorizontalNavbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
      className={`p-4 w-full bg-[#1a1f35] fixed top-0 left-0 z-50 transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex justify-between w-full">
        <Link
          to="/"
          className="text-white text-xl font-bold hover:text-[#9e69da]"
        >
          Home 🏠
        </Link>
        <div>
          <Link
            to="/about"
            className="text-white hover:text-[#9e69da] font-medium px-8"
          >
            About ✨
          </Link>
          <Link
            to="/projects"
            className="text-white hover:text-[#9e69da] font-medium px-8"
          >
            Projects ⚙️
          </Link>
          <Link
            to="/experience"
            className="text-white hover:text-[#9e69da] font-medium px-8"
          >
            Experience ⚡
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-[#9e69da] font-medium px-8"
          >
            Contact ☕
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default HorizontalNavbar;
