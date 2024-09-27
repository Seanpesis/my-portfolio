import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2>🛠 Skills</h2>
        <div className="skills-content">
          <div className="skill-category">
            <h3>Languages</h3>
            <ul>
              <li>Kotlin</li>
              <li>Java</li>
              <li>Swift</li>
              <li>Python</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>C</li>
              <li>C++</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Frameworks</h3>
            <ul>
              <li>React</li>
              <li>Node.js</li>
              <li>Flask</li>
              <li>SwiftUI</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Tools</h3>
            <ul>
              <li>Git</li>
              <li>Visual Studio</li>
              <li>Firebase</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Databases</h3>
            <ul>
              <li>MongoDB</li>
              <li>MySQL</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
