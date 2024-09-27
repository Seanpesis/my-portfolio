import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="experience-container">
        <div className="experience-item">
          <h3>Help Desk Specialist - Herzliya Medical Center</h3>
          <p><strong>July 2024 - Present</strong></p>
          <p>
            Providing top-notch technical support and solutions to ensure seamless IT operations. Assisting users by troubleshooting issues, managing software and hardware installations, and maintaining system performance. Working with Active Directory, CMD, PowerShell, etc.
          </p>
        </div>
        <div className="experience-item">
          <h3>Case Manager - Herzliya Medical Center</h3>
          <p><strong>July 2023 - July 2024</strong></p>
          <p>
            Accompanied patients from the beginning of the journey to the end. Ensured they received the required tests, that the tests were performed, and that the case summary was properly completed. Managed and navigated patient files.
          </p>
        </div>
        <div className="experience-item">
          <h3>Deputy Director of Clinics - Herzliya Medical Center</h3>
          <p><strong>March 2022 - July 2023</strong></p>
          <p>
            In charge of the Gastroenterology Institute. Responsible for arranging the work of the administrative secretariat, managing queues and their placement, and closing files in the accounting department.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;
