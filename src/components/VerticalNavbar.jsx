import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { usePageStore } from '../store';

export const VerticalNavbar = () => {
  const { isWelcomeAccepted } = usePageStore((state) => ({
    isWelcomeAccepted: state.isWelcomeAccepted,
  }));

  if (!isWelcomeAccepted) {
    return null;
  }


  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Home 🏠
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">
              About ✨
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/portfolio" className="navbar-link">
              Portfolio ⚙️
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/experience" className="navbar-link">
              Experience ⚡
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link">
              Contact ☕
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default VerticalNavbar;
