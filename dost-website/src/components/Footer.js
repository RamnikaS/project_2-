import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer>
    <div>
      <nav>
        <Link to="#">About</Link>
        <Link to="#">Projects</Link>
        <Link to="#">Services</Link>
        <Link to="#">Clients</Link>
        <Link to="#">Blog</Link>
        <Link to="#">Contact</Link>
      </nav>
    </div>
    <p>&copy; 2024 Dost. All rights reserved.</p>
  </footer>
);

export default Footer;

