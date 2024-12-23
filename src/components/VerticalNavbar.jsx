import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { usePageStore } from '../store';

export const VerticalNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  
  const { isWelcomeAccepted } = usePageStore((state) => ({
    isWelcomeAccepted: state.isWelcomeAccepted,
  }));

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  if (!isWelcomeAccepted) {
    return null;
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 right-0 z-[100] p-6">
      <div className="flex justify-end items-center">
        <button
          className="md:hidden text-white focus:outline-none flex flex-col gap-1.5 bg-transparent border-none p-0 mr-0 mt-2 z-[101]"
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
        } md:block fixed md:static top-0 left-0 w-screen h-screen md:w-auto md:h-auto bg-[#1a1f35] md:bg-transparent z-[90] flex items-center justify-center md:block`}
      >
        <ul className="list-none p-0 m-0 space-y-6 md:space-y-2 md:flex md:flex-col md:gap-4">
          <li className="my-1">
            <Link 
              to="/about" 
              className="text-white no-underline text-2xl md:text-xl transition-all duration-300 block py-1 hover:text-[#9e69da] md:hover:-translate-x-2"
              onClick={toggleMenu}
            >
              About ✨
            </Link>
          </li>
          <li className="my-1">
            <Link 
              to="/projects" 
              className="text-white no-underline text-2xl md:text-xl transition-all duration-300 block py-1 hover:text-[#9e69da] md:hover:-translate-x-2"
              onClick={toggleMenu}
            >
              Projects ⚙️
            </Link>
          </li>
          <li className="my-1">
            <Link 
              to="/experience" 
              className="text-white no-underline text-2xl md:text-xl transition-all duration-300 block py-1 hover:text-[#9e69da] md:hover:-translate-x-2"
              onClick={toggleMenu}
            >
              Experience ⚡
            </Link>
          </li>
          <li className="my-1">
            <Link 
              to="/contact" 
              className="text-white no-underline text-2xl md:text-xl transition-all duration-300 block py-1 hover:text-[#9e69da] md:hover:-translate-x-2"
              onClick={toggleMenu}
            >
              Contact ☕
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
