import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="experience-container">
        <div className="experience-item">
          <h3>Devops Engineer - Herzliya Medical Center</h3>
          <p><strong>Jan 2024 - Present</strong></p>
          <p>
          As a DevOps Engineer, I streamline software development and IT operations through automation, continuous integration and deployment (CI/CD), and infrastructure management. I ensure system reliability, scalability, and security using tools like Docker, Kubernetes, Jenkins, and cloud platforms (AWS, Azure). My role involves monitoring system performance, optimizing workflows, and closely collaborating with development and IT teams to facilitate seamless product delivery.
          </p>
        </div>
        <div className="experience-item">
          <h3>Case Manager - Herzliya Medical Center</h3>
          <p><strong>Jan 2023 - Jan 2024</strong></p>
          <p>
            Accompanied patients from the beginning of the journey to the end. Ensured they received the required tests, that the tests were performed, and that the case summary was properly completed. Managed and navigated patient files.
          </p>
        </div>
        <div className="experience-item">
          <h3>Deputy Director of Clinics - Herzliya Medical Center</h3>
          <p><strong>March 2022 - Jan 2023</strong></p>
          <p>
            In charge of the Gastroenterology Institute. Responsible for arranging the work of the administrative secretariat, managing queues and their placement, and closing files in the accounting department.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;
