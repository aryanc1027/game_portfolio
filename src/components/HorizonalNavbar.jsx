import React from 'react';
import { Link } from 'react-router-dom';

export const HorizontalNavbar = () => {
  return (
    <nav className="bg-[#20b2aa] p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link to="/" className="text-white text-xl font-bold hover:text-gray-200">
            Home 🏠
          </Link>
        </div>
        <ul className="flex space-x-8">
          <li>
            <Link to="/about" className="text-white hover:text-gray-200 font-medium">
              About ✨
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="text-white hover:text-gray-200 font-medium">
              Portfolio ⚙️
            </Link>
          </li>
          <li>
            <Link to="/experience" className="text-white hover:text-gray-200 font-medium">
              Experience ⚡
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-gray-200 font-medium">
              Contact ☕
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HorizontalNavbar;
