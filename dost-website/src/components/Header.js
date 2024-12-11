import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <img src="./Dost Logo-02.png" alt="Pet-First Logo" />
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="#">Medicare</Link></li>
        <li><Link to="#">Blog</Link></li>
        <li><Link to="#">Sign Up</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;

