
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Download, Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";

const projectList = [
  {
    title: 'WSL2 - Task Manager',
    description: 'The code uses Linux semaphores to synchronize multiple processes, allowing them to safely access shared resources without conflicts.',
    challenge: 'Managing concurrent processes in Linux environments often leads to race conditions and resource conflicts, requiring robust synchronization mechanisms.',
    solution: 'Implemented a sophisticated task management system using System V semaphores to ensure thread-safe operations and prevent deadlocks in multi-process environments.',
    techStack: 'C, GCC, Linux (WSL2), System V Semaphores',
    image: 'https://i.postimg.cc/FRknKLvZ/image.png',
    link: 'https://github.com/Seanpesis/task-manager-wsl2',
    video: '/videos/wsl2-demo.mp4'
  },
  {
    title: 'ShelterGuard - Safe Route Planner',
    description: 'A web application that helps drivers in Israel plan safer routes by mapping nearby public shelters, scoring route safety, and suggesting safer alternatives.',
    challenge: 'During security alerts in Israel, drivers need quick access to nearby shelters and safe route alternatives, but existing navigation apps lack this critical safety information.',
    solution: 'Developed an intelligent route planning application that integrates real-time shelter data with mapping technology, providing safety scores and alternative routes during emergencies.',
    techStack: 'React, Vite, Leaflet, JavaScript, Base44 Hosting',
    image: 'https://i.postimg.cc/nz7bP5Xp/image.png',
    link: 'https://github.com/Seanpesis/shelterguard',
    siteLink: 'https://app--shelter-guard-6ba27339.base44.app/'
  },
  {
    title: 'Friendly Place',
    description: 'Social platform for sharing experiences.',
    challenge: 'Creating meaningful connections and experience sharing in digital spaces requires intuitive design and seamless user interactions.',
    solution: 'Built a comprehensive social platform with real-time interactions, user-generated content management, and responsive design for optimal cross-device experience.',
    techStack: 'React, Node.js, MongoDB',
    image: 'https://i.postimg.cc/jj1ZBQ9X/image.png',
    siteLink: 'https://friendlyplace.netlify.app/',
    link: 'https://github.com/Seanpesis/friendly-place',
  },
  {
    title: 'Pactroll',
    description: 'Game similar to Pac-Man but with unique twists.',
    challenge: 'Reimagining classic arcade gameplay for modern mobile platforms while maintaining the nostalgic appeal and adding innovative features.',
    solution: 'Developed a mobile-optimized game using Kotlin with enhanced graphics, smooth animations, and unique gameplay mechanics that respect the original while offering fresh challenges.',
    techStack: 'Android Studio, Kotlin',
    image: 'https://i.postimg.cc/hPhhtL3x/image.png',
    link: 'https://github.com/Seanpesis/pactroll',
  },
  {
    title: 'DevOps Project',
    description: 'DevOps portfolio automating CI/CD pipelines, managing infrastructure with Terraform, and deploying applications using Docker and Kubernetes on AWS.',
    challenge: 'Modern software deployment requires automated, scalable, and reliable infrastructure management across cloud environments with minimal manual intervention.',
    solution: 'Architected a complete DevOps ecosystem with Infrastructure as Code (IaC), automated CI/CD pipelines, containerized deployments, and comprehensive monitoring solutions.',
    techStack: 'CI/CD, Terraform, Docker, Kubernetes',
    image: 'https://i.postimg.cc/rwHqZ78Y/image.png',
    link: 'https://github.com/Seanpesis/devops-portfolio-project',
  },
  {
    title: 'TaskIT',
    description: 'A Hebrew task management desktop app built with WPF and .NET, storing tasks locally with SQLite.',
    challenge: 'Hebrew-speaking users needed a native desktop task management solution with right-to-left (RTL) support and offline functionality.',
    solution: 'Created a feature-rich WPF application with full Hebrew localization, RTL interface design, and local SQLite database for secure offline task management.',
    techStack: 'C#, .NET 8, WPF, XAML, SQLite, Entity Framework Core',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/8ffca1203_IMG_0071.jpg',
    link: 'https://github.com/Seanpesis/TaskIT',
    video: 'https://www.kapwing.com/videos/686166b51a582c7957ff9621',
    downloadLink: 'https://drive.google.com/file/d/1YArZc7dhfWa3THS4VK_ID4fiVBgMaX_L/view?usp=drive_link'
  },
  {
    title: 'Tetris Game',
    description: 'Developed in Swift for iPad with responsive controls.',
    challenge: 'Adapting the classic Tetris experience for touch-based iPad interfaces while maintaining precise control and smooth gameplay.',
    solution: 'Implemented an optimized Swift-based Tetris game with intuitive touch gestures, adaptive layouts, and responsive controls specifically designed for iPad interaction patterns.',
    techStack: 'Swift, Xcode',
    image: 'https://i.postimg.cc/RFBhG2dx/image.png',
  },
  {
    title: 'DevSecOps-App',
    description: 'DevSecOps platform integrating Jenkins, Kubernetes, and Slack for secure and automated CI/CD pipeline management.',
    challenge: 'Organizations need integrated security throughout their development lifecycle, not just as an afterthought, while maintaining development velocity.',
    solution: 'Built a comprehensive DevSecOps platform that embeds security checks into CI/CD pipelines, with real-time notifications and automated compliance reporting.',
    techStack: 'Jenkins, Kubernetes, Docker, Helm, Prometheus, Grafana, Node.js, NPM, Jest, GitHub, kubectl',
    image: 'https://i.postimg.cc/7Y0xtKCx/image.png',
    link: 'https://github.com/Seanpesis/devsecops-app',
  },
  {
    title: 'Movie Recommendations',
    description: 'Platform to discover and get recommendations for movies based on ratings, genres, titles, and directors.',
    challenge: 'Movie enthusiasts struggle to find personalized recommendations from vast catalogs, needing intelligent filtering based on multiple criteria.',
    solution: 'Developed an intelligent recommendation engine that analyzes user preferences across multiple dimensions (ratings, genres, directors) to deliver personalized movie suggestions.',
    techStack: 'React, CSS, Axios, Git & GitHub',
    image: 'https://i.postimg.cc/8CWB7Qc2/image.png',
    siteLink: 'https://movies-and-chills.netlify.app/',
    link: 'https://github.com/Seanpesis/movie-recommendations',
  },
  {
    title: 'Interactive Hand-Controlled Pong Game',
    description: 'An interactive Pong game built with Python, OpenCV, and MediaPipe Hands that allows players to control paddles using real-time hand movements via a webcam, featuring both single-player and multiplayer modes, dynamic scoring, and increasing ball speed for enhanced gameplay.',
    challenge: 'Traditional gaming interfaces limit accessibility and immersion, requiring innovative input methods that leverage computer vision for natural interaction.',
    solution: 'Engineered a computer vision-powered gaming system using MediaPipe and OpenCV that translates real-time hand gestures into precise game controls, creating an intuitive and accessible gaming experience.',
    techStack: 'Python, OpenCV, MediaPipe Hands, NumPy',
    image: 'https://i.postimg.cc/qRJh493X/image.png',
    link: 'https://github.com/Seanpesis/Ping_Pong',
  },
  {
    title: "Hand Gesture Tic-Tac-Toe",
    description: "Hand Gesture Tic-Tac-Toe is an interactive game developed using Python, OpenCV, and Mediapipe, enabling users to play Tic-Tac-Toe through real-time hand gesture recognition.",
    challenge: 'Traditional input methods limit game accessibility and user engagement, particularly for users who benefit from alternative interaction modalities.',
    solution: 'Created an innovative gesture-based gaming interface using advanced computer vision algorithms to detect and interpret hand movements, transforming natural gestures into game actions.',
    techStack: "Python, OpenCV, Mediapipe, NumPy",
    image: "https://i.postimg.cc/vBxBYbmn/image.png",
    link: 'https://github.com/Seanpesis/tic_tac_toe',
  },
  {
    title: "Emoji Gesture App",
    description: "An innovative application that transforms hand gestures into emojis using real-time computer vision and AI. Built with Python, OpenCV, and MediaPipe, this app streamlines digital communication by allowing users to generate emojis through natural hand movements.",
    challenge: 'Digital communication often lacks the nuance of face-to-face interaction, and typing emojis can be time-consuming and interrupt natural conversation flow.',
    solution: 'Developed an AI-powered application that bridges physical and digital communication by instantly converting hand gestures into contextually appropriate emojis, enhancing expression in digital interactions.',
    techStack: "Python, OpenCV, MediaPipe, PyQt, NumPy",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/309bc4554_IMG_1666.jpg",
    link: 'https://github.com/Seanpesis/emoji-gesture-app',
    video: 'https://www.loom.com/share/f9ffbdcc44f7404d82adea40e3183047'
  },
  {
    title: 'LifeLine',
    description: 'Smart personal/family management platform with 500+ beta users – features include two-way calendar sync, AI financial advisor, and SOS alerts.',
    challenge: 'Families struggle to coordinate schedules, manage finances, and ensure safety across multiple platforms, leading to fragmented communication and missed important events.',
    solution: 'Engineered a comprehensive family management ecosystem with integrated calendar synchronization, AI-driven financial insights, and emergency response features, serving 500+ active beta users.',
    techStack: 'React Native, Node.js, AWS S3, MongoDB',
    image: 'https://i.postimg.cc/ZY6m8Zww/Chat-GPT-Image-Jun-29-2025-03-59-17-PM.png',
    link: 'https://github.com/Seanpesis/lifeline',
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">My Projects</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A comprehensive collection of projects spanning web applications, mobile apps, and AI-driven solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {projectList.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="bg-slate-800/30 backdrop-blur-xl rounded-2xl overflow-hidden border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="relative overflow-hidden">
                    {/* Removed the 'Play' icon placeholder as all projects have images defined */}
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover bg-slate-900/50 transition-transform duration-300 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-slate-400 mb-4 line-clamp-2">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.split(', ').slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                          {tech}
                        </Badge>
                      ))}
                      {project.techStack.split(', ').length > 3 && (
                        <Badge variant="secondary" className="bg-slate-700/50 text-slate-300 border-slate-600/50">
                          +{project.techStack.split(', ').length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-3">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-slate-400 hover:text-white transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.siteLink && (
                        <a
                          href={project.siteLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                      {project.downloadLink && (
                        <a
                          href={project.downloadLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-green-400 hover:text-green-300 transition-colors"
                        >
                          <Download className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl w-[calc(100%-2rem)] h-auto max-h-[90vh] overflow-y-auto bg-slate-900/95 backdrop-blur-xl border-slate-700/50 text-white top-4 translate-y-0 rounded-lg p-0">
          {selectedProject && (
            <>
              <DialogHeader className="sticky top-0 bg-slate-900/95 backdrop-blur-xl z-10 p-6 border-b border-slate-700/30">
                <div className="flex justify-between items-center">
                  <DialogTitle className="text-2xl font-bold text-white">
                    {selectedProject.title}
                  </DialogTitle>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800/50 rounded-lg"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </DialogHeader>

              <div className="space-y-6 p-6">
                {selectedProject.video ? (
                  <div className="w-full bg-slate-800/50 rounded-xl p-2 flex items-center justify-center">
                    {/* Check if the video is from Kapwing and render an iframe if so */}
                    {selectedProject.video.includes("kapwing.com") ? (
                       <iframe
                         src={selectedProject.video.replace('/videos/', '/e/')}
                         className="max-w-full h-80 rounded-lg w-full"
                         frameBorder="0"
                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                         allowFullScreen
                         title={selectedProject.title}
                       ></iframe>
                    ) : selectedProject.video.includes("drive.google.com") ? (
                       <iframe
                         src={selectedProject.video.replace('/view', '/preview')}
                         className="max-w-full h-80 rounded-lg w-full"
                         frameBorder="0"
                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                         allowFullScreen
                         title={selectedProject.title}
                       ></iframe>
                    ) : selectedProject.video.includes("youtube.com") || selectedProject.video.includes("youtu.be") ? (
                       <iframe
                         src={selectedProject.video.replace("watch?v=", "embed/").replace("youtu.be/", "www.youtube.com/embed/")}
                         className="max-w-full h-80 rounded-lg w-full"
                         frameBorder="0"
                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                         allowFullScreen
                         title={selectedProject.title}
                       ></iframe>
                    ) : selectedProject.video.includes("loom.com") ? (
                       <iframe
                         src={selectedProject.video.replace("/share/", "/embed/").split('?')[0]}
                         className="max-w-full h-80 rounded-lg w-full"
                         frameBorder="0"
                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                         allowFullScreen
                         title={selectedProject.title}
                       ></iframe>
                    ) : (
                      <video
                        key={selectedProject.video}
                        src={selectedProject.video}
                        controls
                        autoPlay
                        loop
                        muted
                        className="max-w-full h-80 rounded-lg object-contain"
                      >
                        Your browser does not support the video tag.
                      </video>
                    )}
                  </div>
                ) : selectedProject.image && (
                  <div className="w-full bg-slate-800/50 rounded-xl p-4 flex items-center justify-center">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="max-w-full max-h-96 object-contain rounded-lg"
                    />
                  </div>
                )}

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Project Overview</h3>
                  <p className="text-slate-300 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white flex items-center gap-2">
                      🎯 The Challenge
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {selectedProject.challenge}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white flex items-center gap-2">
                      💡 The Solution
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                {selectedProject.techStack && (
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-white">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.split(', ').map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-4 pt-4">
                  {selectedProject.siteLink && (
                    <a href={selectedProject.siteLink} target="_blank" rel="noopener noreferrer">
                      <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </Button>
                    </a>
                  )}
                  {selectedProject.downloadLink && (
                    <a href={selectedProject.downloadLink} target="_blank" rel="noopener noreferrer">
                      <Button className="bg-green-500 hover:bg-green-600 text-white">
                        <Download className="w-4 h-4 mr-2" />
                        Download App
                      </Button>
                    </a>
                  )}
                  {selectedProject.link && (
                    <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="border-slate-600 bg-slate-800/50 text-white hover:bg-slate-700/50">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
