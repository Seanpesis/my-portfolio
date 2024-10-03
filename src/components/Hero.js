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
          👀 Looking to collaborate on CI/CD pipeline, Jenkins, Kubernetes, and Python projects.<br />
          🤔 Seeking guidance in open-source contributions and problem-solving challenges.<br />
          💬 Feel free to ask me about software development, debugging, or game design.
        </p>
        <a href="#contact" className="cta-button">Get in Touch</a>
      </div>
    </section>
  );
}

export default Hero;
