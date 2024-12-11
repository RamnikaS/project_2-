import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ footerLinks }) => (
  <footer>
    <div>
      <nav>
        {footerLinks.map((link, index) => (
          <Link key={index} to={link.path}>
            {link.text}
          </Link>
        ))}
      </nav>
    </div>
    <p>&copy; 2024 Dost. All rights reserved.</p>
  </footer>
);

export default Footer;
