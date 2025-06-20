import React from 'react';
import './Education.css';

function Education() {
  return (
    <section id="education">
      <h2>Education</h2>
      <div className="education-container">
        <div className="education-item">
          <h3>Bachelor's Degree in Computer Science - HIT Holon Technology Institute</h3>
          <p><strong>2022 - Expected 2025</strong></p>
          <p>Currently pursuing a Bachelor's degree in Computer Science.</p>
        </div>
        <div className="education-item">
          <h3>GED - Matriculation</h3>
          <p><strong>2008 - 2019</strong></p>
          <p>Full matriculation, 5/10 in Computer Science.</p>
        </div>
      </div>
    </section>
  );
}

export default Education;
