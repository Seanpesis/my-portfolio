import React from 'react';
import Slider from 'react-slick';
import './Projects.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextArrow({ onClick }) {
  return (
    <div className="custom-arrow custom-next" onClick={onClick}>
      ❯
    </div>
  );
}

function PrevArrow({ onClick }) {
  return (
    <div className="custom-arrow custom-prev" onClick={onClick}>
      ❮
    </div>
  );
}


function Projects() {
  const projectList = [
    {
      title: 'Friendly Place',
      description: 'Social platform for sharing experiences.',
      techStack: 'React, Node.js, MongoDB',
      image: '/images/friendly-place.png',
      link: 'https://friendlyplace.netlify.app/',
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
      link: 'https://movies-and-chills.netlify.app/',
    },
    {
      title: 'Interactive Hand-Controlled Pong Game',
      description: 'An interactive Pong game built with Python, OpenCV, and MediaPipe Hands that allows players to control paddles using real-time hand movements via a webcam, featuring both single-player and multiplayer modes, dynamic scoring, and increasing ball speed for enhanced gameplay.',
      techStack: 'Python, OpenCV, MediaPipe Hands, NumPy',
      image: '/images/InteractivePong.png',
      link: 'https://github.com/Seanpesis/Ping_Pong',
    },
    {
      title: "Hand Gesture Tic-Tac-Toe",
      description: "Hand Gesture Tic-Tac-Toe is an interactive game developed using Python, OpenCV, and Mediapipe, enabling users to play Tic-Tac-Toe through real-time hand gesture recognition.",
      techStack: "Python, OpenCV, Mediapipe, NumPy",
      image:"/images/HandGestureTicTacToe.png",
      link:'https://github.com/Seanpesis/tic_tac_toe',
    },
    {
      title: "Emoji Gesture App",
      description: "An innovative application that transforms hand gestures into emojis using real-time computer vision and AI. Built with Python, OpenCV, and MediaPipe, this app streamlines digital communication by allowing users to generate emojis through natural hand movements.",
      techStack: "Python, OpenCV, MediaPipe, PyQt, NumPy",
      image: "/images/EmojiGestureApp.png",
      link: 'https://github.com/Seanpesis/emoji-gesture-app',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section id="projects">
      <div className="container">
        <h2>🔥 My Projects</h2>
        <Slider {...settings}>
          {projectList.map((project, index) => (
            <div key={index} className="project-slide">
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
        </Slider>
      </div>
    </section>
  );
}

export default Projects;