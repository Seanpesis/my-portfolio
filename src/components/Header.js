import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="navbar">
      <div className="container">
        <nav>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <ul className="social-links">
          <li>
            <a href="https://github.com/Seanpesis" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/sean-pesis-28b3b0225" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
