
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { ChevronRight, Star, ExternalLink, Code, Sparkles, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const projectList = [
  {
    title: 'WSL2 - Task Manager',
    description: 'The code uses Linux semaphores to synchronize multiple processes, allowing them to safely access shared resources without conflicts.',
    techStack: 'C, GCC, Linux (WSL2), System V Semaphores',
    image: 'https://i.postimg.cc/FRknKLvZ/image.png',
    link: 'https://github.com/Seanpesis/task-manager-wsl2',
  },
  {
    title: 'ShelterGuard - Safe Route Planner',
    description: 'A web application that helps drivers in Israel plan safer routes by mapping nearby public shelters, scoring route safety, and suggesting safer alternatives.',
    techStack: 'React, Vite, Leaflet, JavaScript, Base44 Hosting',
    image: 'https://i.postimg.cc/nz7bP5Xp/image.png',
    link: 'https://github.com/Seanpesis/shelterguard',
    siteLink: 'https://app--shelter-guard-6ba27339.base44.app/'
  },
  {
    title: 'LifeLine',
    description: 'Smart personal/family management platform with 500+ beta users – features include two-way calendar sync, AI financial advisor, and SOS alerts.',
    techStack: 'React Native, Node.js, AWS S3, MongoDB',
    image: 'https://i.postimg.cc/ZY6m8Zww/Chat-GPT-Image-Jun-29-2025-03-59-17-PM.png',
    link: 'https://github.com/Seanpesis/lifeline',
  },
];

export default function Home() {
  const featuredProjects = projectList.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/60 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -100, -20],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto relative z-10"
        >
          {/* Animated Profile Section */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100, damping: 12 }}
            className="relative w-40 h-40 mx-auto mb-8"
          >
            {/* Animated Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-blue-500/30 border-dashed"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-2 rounded-full border border-purple-500/30 border-dotted"
            />
            
            {/* Floating Icons */}
            <motion.div
              animate={{ 
                y: [-10, 10, -10],
                rotate: [0, 5, 0]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-500/30"
            >
              <Code className="w-4 h-4 text-blue-400" />
            </motion.div>
            
            <motion.div
              animate={{ 
                y: [10, -10, 10],
                rotate: [0, -5, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -left-4 w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-purple-500/30"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
            </motion.div>

            {/* Profile Image */}
            <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 relative">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <img 
                  src="https://i.postimg.cc/wTmDMQnZ/image.jpg" 
                  alt="Sean Pesis"
                  className="w-full h-full object-cover"
                />
                <motion.div
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 bg-[length:200%_100%]"
                />
              </div>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Sean Pesis
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-blue-400 mb-4 font-medium"
          >
            Full-Stack & DevOps Engineer
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Over 3 years of experience in scalable cloud infrastructure, CI/CD pipelines, and modern web technologies. 
            Passionate about delivering efficient, user-focused solutions that optimize performance and reduce costs.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to={createPageUrl("Projects")}>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium">
                View Projects
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to={createPageUrl("Contact")}>
              <Button 
                variant="outline" 
                className="border-slate-600 bg-slate-800/50 backdrop-blur-sm text-white hover:bg-slate-700/50 hover:border-slate-500 px-8 py-3 rounded-full text-lg transition-all duration-300 font-medium"
              >
                Let's Talk
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              A selection of innovative projects that showcase my expertise in modern development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-slate-800/30 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    {project.image && ( 
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    )}
                    <div className="absolute top-4 right-4">
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-400 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.split(', ').slice(0, 3).map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.siteLink && (
                      <a href={project.siteLink} target="_blank" rel="noopener noreferrer" 
                         className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                        Live
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer"
                         className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors">
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <Link to={createPageUrl("Projects")}>
              <Button 
                variant="outline" 
                className="border-slate-600 bg-slate-800/50 backdrop-blur-sm text-white hover:bg-slate-700/50 hover:border-slate-500 px-8 py-3 rounded-full font-medium"
              >
                View All Projects
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl rounded-3xl p-12 border border-slate-700/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Let's Build Something Amazing Together
              </h2>
              <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
                Have an exciting project in mind? Let's discuss how I can help bring your vision to reality 
                with cutting-edge technology and exceptional design.
              </p>
              <Link to={createPageUrl("Contact")}>
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
