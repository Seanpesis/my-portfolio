import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <img src="/images/profile.png" alt="Sean Pesis" />
        <h1>Hi there, I'm Sean 👋</h1>
        <h2>Full Stack Engineer and Computer Science Student</h2>
        <p>
          🔭 Working on side projects and learning new tech.<br />
          🎓 Studying CS (BSc, 3rd year).<br />
          👀 Open to Full Stack collaborations (modern web, Python, backend).<br />
          🤔 Exploring open source and problem-solving challenges.<br />
          💬 Ask me anything about software, engineering, or game dev.
        </p>
        <a href="#contact" className="cta-button">Get in Touch</a>
      </div>
    </section>
  );
}

export default Hero;
