import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <img src="/images/profile.png" alt="Sean Pesis" />
        <h1>Hi there, I'm Sean 👋</h1>
        <h2>Third-year Computer Science Student</h2>
        <p>
          🔭 I’m currently working on side projects and learning various technologies.<br />
          🎓 Studying Computer Science (BSc, 3rd year).<br />
          👀 Looking to collaborate on Full Stack development projects, focusing on modern web technologies, Python projects and robust backend solutions.<br />
          🤔 Seeking guidance in open-source contributions and problem-solving challenges.<br />
          💬 Feel free to ask me about Software development, Full Stack Engineer, or Game design.
        </p>
        <a href="#contact" className="cta-button">Get in Touch</a>
      </div>
    </section>
  );
}

export default Hero;
