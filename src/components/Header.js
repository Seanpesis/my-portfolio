import React, { useState } from "react";
import "./Header.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className="navbar">
      <nav className="navbar-content">
        <div className="logo">
          <a href="#hero">Sean Pesis</a>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className={menuActive ? "active" : ""}></span>
          <span className={menuActive ? "active" : ""}></span>
          <span className={menuActive ? "active" : ""}></span>
        </div>

        <ul className={`nav-links ${menuActive ? "active" : ""}`}>
          <li>
            <a href="#hero" onClick={() => setMenuActive(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setMenuActive(false)}>
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => setMenuActive(false)}>
              Skills
            </a>
          </li>
          <li>
            <a href="#experience" onClick={() => setMenuActive(false)}>
              Experience
            </a>
          </li>
          <li>
            <a href="#education" onClick={() => setMenuActive(false)}>
              Education
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMenuActive(false)}>
              Contact
            </a>
          </li>

          <li className="download-cv-li">
            <a
              href="/SeanPesis_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              onClick={() => setMenuActive(false)}
            >
              <i className="fas fa-file-download"></i> Download CV
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
