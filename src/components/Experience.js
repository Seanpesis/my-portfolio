import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="experience-container">
      <div className="experience-item">
          <h3>Full Stack Engineer - Herzliya Medical Center</h3>
          <p><strong>Dec 2024 - Present</strong></p>
          <p>
          ● Built and maintained secure, high-performance web applications and patient portals using modern frameworks and backend technologies.<br />
          ● Integrated APIs and databases to ensure smooth data flow and optimized user experience.
          </p>
        </div>
        <div className="experience-item">
          <h3>Devops Engineer - Herzliya Medical Center</h3>
          <p><strong>Jan 2021 - Dec 2024</strong></p>
          <p>
          ● Designed and managed CI/CD pipelines, containerized applications with Docker/Kubernetes, and maintained cloud infrastructure for scalability and security.<br />
          ● Reduced deployment times and improved system reliability through proactive monitoring and automated processes.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;
