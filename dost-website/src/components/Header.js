import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ navLinks }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <img src="/Dost Logo-01.png" alt="Pet-First Logo" />
      <nav>
        <ul className={isMenuOpen ? 'open' : ''}>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.path}>{link.text}</Link>
            </li>
          ))}
        </ul>
        <button onClick={toggleMenu}>
          {isMenuOpen ? 'Close Menu' : 'Open Menu'}
        </button>
      </nav>
    </header>
  );
};

export default Header;


