import React from 'react';
import { Link } from 'react-router-dom';

export const HorizontalNavbar = () => {
  return (
    <nav className="p-4 shadow-lg w-full">
      <div className="flex justify-between w-full">
        <Link to="/" className="text-white text-xl font-bold hover:text-[#9e69da]">
          Home 🏠
        </Link>
        <div>
          <Link to="/about" className="text-white hover:text-[#9e69da] font-medium px-8">
            About ✨
          </Link>
          <Link to="/portfolio" className="text-white hover:text-[#9e69da] font-medium px-8">
            Portfolio ⚙️
          </Link>
          <Link to="/experience" className="text-white hover:text-[#9e69da] font-medium px-8">
            Experience ⚡
          </Link>
          <Link to="/contact" className="text-white hover:text-[#9e69da] font-medium px-8">
            Contact ☕
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default HorizontalNavbar;
