import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>&copy; {currentYear} Sean Pesis. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
