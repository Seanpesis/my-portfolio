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
          ● Improved web application performance by 35% and reduced load times by 50% through front-end optimization.<br />
          ● Increased user engagement by 20% via enhanced UI/UX and streamlined feature access.
          </p>
        </div>
        <div className="experience-item">
          <h3>DevOps Engineer & Cloud Infra Lead - Herzliya Medical Center</h3>
          <p><strong>Jan 2023 - Dec 2024</strong></p>
          <p>
          ● Spearheaded CI/CD pipeline implementation using Jenkins and Azure Pipelines, significantly enhancing deployment reliability.<br />
          ● Cut infrastructure costs by 15% through optimized Docker and Kubernetes orchestration.
          </p>
        </div>
        <div className="experience-item">
          <h3>IT Help-Desk & Systems Specialist - Herzliya Medical Center</h3>
          <p><strong>Jan 2020 - Jan 2023</strong></p>
          <p>
          ● Managed and supported over 450 endpoints, automating software deployments and patching via custom scripting.<br />
          ● Achieved >98% data recovery success rate; consistently recognized for excellence in customer support.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;
