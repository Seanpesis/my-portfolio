// src/components/Header.js
import React from 'react';
import './Header.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Header() {
  return (
    <header className="navbar">
      <nav className="navbar-content">
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
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
        <div className="download-cv">
          <a href="/SeanPesis_CV.pdf" target="_blank" rel="noopener noreferrer" download>
            <i className="fas fa-file-download"></i> Download CV
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
