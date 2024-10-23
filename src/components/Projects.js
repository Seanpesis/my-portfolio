// src/components/Projects.js
import React from 'react';
import './Projects.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Projects() {
  const projectList = [
    {
      title: 'Friendly Place',
      description: 'Social platform for sharing experiences.',
      techStack: 'React, Node.js, MongoDB',
      image: '/images/friendly-place.png',
      link: 'https://github.com/Seanpesis/Friendly-Place',
    },
    {
      title: 'Pactroll',
      description: 'Game similar to Pac-Man but with unique twists.',
      techStack: 'Android Studio, Kotlin',
      image: '/images/pactroll.png',
    },
    {
      title: 'DevOps Project',
      description: 'DevOps portfolio automating CI/CD pipelines, managing infrastructure with Terraform, and deploying applications using Docker and Kubernetes on AWS.',
      techStack: 'CI/CD, Terraform, Docker, Kubernetes',
      image: '/images/devpro.png',
      link: 'https://github.com/Seanpesis/devops-portfolio-project',
    },
    {
      title: 'Tetris Game',
      description: 'Developed in Swift for iPad with responsive controls.',
      techStack: 'Swift, Xcode',
      image: '/images/tetris-game.png',
    },
    {
      title: 'DevSecOps-App',
      description: 'DevSecOps platform integrating Jenkins, Kubernetes, and Slack for secure and automated CI/CD pipeline management.',
      techStack: 'Jenkins, Kubernetes, Docker, Helm, Prometheus, Grafana, Node.js, NPM, Jest, GitHub, kubectl',
      image: '/images/Devsecops.png',
      link: 'https://github.com/Seanpesis/devsecops-app',
    },
    {
      title: 'Movie Recommendations',
      description: 'Platform to discover and get recommendations for movies based on ratings, genres, titles, and directors.',
      techStack: 'React, CSS, Axios, Git & GitHub',
      image: '/images/logomov.png',
      link: 'https://movie-and-chill.netlify.app/',
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
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Project
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
