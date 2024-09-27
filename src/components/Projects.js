import React from 'react';
import './Projects.css';

function Projects() {
  const projectList = [
    {
      title: 'Friendly Place',
      description: 'Social platform for sharing experiences.',
      techStack: 'React, Node.js, MongoDB',
      image: '/images/friendly-place.png',
    },
    {
      title: 'Pactroll',
      description: 'Game similar to Pac-Man but with unique twists.',
      techStack: 'Android Studio, Kotlin',
      image: '/images/pactroll.png',
    },
    {
      title: 'Tetris Game',
      description: 'Developed in Swift for iPad with responsive controls.',
      techStack: 'Swift, Xcode',
      image: '/images/tetris-game.png',
    },
  ];

  return (
    <section id="projects">
      <div className="container">
        <h2>🔥 My Projects</h2>
        <div className="projects-grid">
          {projectList.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p><strong>Tech Stack:</strong> {project.techStack}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
