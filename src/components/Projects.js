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
      title: 'Devops Project',
      description: 'The project is a DevOps Portfolio that automates CI/CD pipelines, manages infrastructure with Terraform, and deploys applications using Docker and Kubernetes on AWS.',
      techStack: 'CI/CD, Terraform, Docker, Kubernetes.',
      image: '/images/devpro.png',
    },
    {
      title: 'Tetris Game',
      description: 'Developed in Swift for iPad with responsive controls.',
      techStack: 'Swift, Xcode',
      image: '/images/tetris-game.png',
    },
    {
      title: 'Devsecops-App',
      description: 'Devsecops-App is a comprehensive DevSecOps platform that integrates Jenkins and Kubernetes with Slack, enabling secure and automated CI/CD pipeline management through intuitive ChatOps interactions',
      techStack: 'Jenkins, Kubernetes, Docker, Helm, Prometheus, Grafana, Node.js, NPM, Jest, GitHub, kubectl',
      image: '/images/Devsecops.png',
    },
    {
    title: 'Movie Recommendations',
    description: 'Platform to discover and get recommendations for movies based on ratings, genres, titles, and directors.',
    techStack: 'React, CSS, Axios, Git & GitHub.',
    image: '/images/logomov.png',
    }
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
