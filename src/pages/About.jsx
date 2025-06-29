
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Experience } from "@/api/entities";
import { Calendar, MapPin, Code, Award, Download, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const [experiences, setExperiences] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [expData] = await Promise.all([
        Experience.list("-start_date")
      ]);
      setExperiences(expData);
    } catch (error) {
      console.error("Error loading data:", error);
    }
    setIsLoading(false);
  };

  const skillsData = {
    "Languages": ["Kotlin", "Java", "JavaScript", "Swift", "Python", "C", "C++", "C#", "Vue.js", "PHP"],
    "Web Development": ["HTML", "CSS", "React"],
    "Version Control": ["Git", "GitLab", "GitHub", "GitHub Actions"],
    "Development Tools": ["Xcode", "Visual Studio", "Firebase"],
    "Databases": ["MongoDB", "SQL"],
    "Scripting": ["Bash", "PowerShell"],
    "Operating Systems": ["WSL", "Ubuntu", "Lubuntu", "Kali Linux"],
    "DevOps & CI/CD": ["CI/CD Pipeline", "Kubernetes", "Docker", "Jenkins", "Helm", "npx", "Ansible"],
    "Monitoring & Logging": ["Prometheus", "Grafana", "Elastic Stack (ELK)"],
    "ChatOps": ["Slack", "Slack API"],
    "Infrastructure as Code": ["Helm Charts", "kubectl", "Terraform"],
    "Security": ["DevSecOps Practices", "Jenkins Security Plugins", "AWS IAM"],
    "Cloud Platforms": ["Azure", "AWS", "AWS Elastic Beanstalk", "AWS Lambda", "Google Cloud"]
  };

  const educationData = [
    {
      degree: "Bachelor's Degree in Computer Science",
      institution: "HIT Holon Technology Institute",
      years: "2022 - Expected 2025",
      description: "Currently pursuing a Bachelor's degree in Computer Science."
    },
    {
      degree: "GED - Matriculation",
      institution: "",
      years: "2008 - 2019",
      description: "Full matriculation, 5/10 in Computer Science."
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About Me</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Full-Stack and DevOps engineer with a passion for creating scalable solutions and optimizing system performance
          </p>
        </motion.div>

        {/* Personal Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <Card className="bg-slate-800/30 backdrop-blur-xl border-slate-700/50">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">Sean Pesis</h2>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    Full-Stack and DevOps engineer with over 3 years of hands-on experience in scalable cloud infrastructure,
                    CI/CD pipelines, and modern web and mobile technologies. Proven ability to optimize system performance,
                    reduce costs, and enhance user engagement. Currently pursuing B.Sc. in Computer Science at Holon Institute
                    of Technology (HIT), expected 2025.
                  </p>
                  <div className="flex flex-wrap gap-4 text-slate-400">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Israel
                    </div>
                    <div className="flex items-center gap-2">
                      <Code className="w-4 h-4" />
                      Full-Stack & DevOps Engineer
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      3+ Years Experience
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img
                        src="https://i.postimg.cc/wTmDMQnZ/image.jpg"
                        alt="Sean Pesis"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <a href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/7a78b88bd_SeanPesis_CV-NEW.pdf" download>
                    <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                      <Download className="w-4 h-4 mr-2" />
                      Download CV
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Professional Journey</h2>

          {isLoading ? (
            <div className="space-y-6">
              {[...Array(3)].map((_, i) => (
                <Card key={i} className="bg-slate-800/30 backdrop-blur-xl border-slate-700/50 animate-pulse">
                  <CardContent className="p-6">
                    <div className="h-6 bg-slate-700/50 rounded w-1/3 mb-2"></div>
                    <div className="h-4 bg-slate-700/50 rounded w-1/4 mb-4"></div>
                    <div className="h-4 bg-slate-700/50 rounded w-full mb-2"></div>
                    <div className="h-4 bg-slate-700/50 rounded w-3/4"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block"></div>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-slate-900 hidden md:block"></div>
                    
                    <Card className="bg-slate-800/30 backdrop-blur-xl border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 md:ml-16">
                      <CardContent className="p-6">
                        <div className="flex flex-wrap justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                            <p className="text-blue-400 font-medium">{exp.company}</p>
                          </div>
                          <div className="flex items-center gap-2 text-slate-400">
                            <Calendar className="w-4 h-4" />
                            <span>
                              {new Date(exp.start_date).getFullYear()} -
                              {exp.current ? " Present" : ` ${new Date(exp.end_date).getFullYear()}`}
                            </span>
                          </div>
                        </div>

                        <p className="text-slate-300 mb-4 leading-relaxed">{exp.description}</p>

                        {exp.achievements && exp.achievements.length > 0 && (
                          <div className="mb-4">
                            <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                              <Award className="w-4 h-4" />
                              Key Achievements:
                            </h4>
                            <ul className="list-disc list-inside text-slate-400 space-y-1">
                              {exp.achievements.map((achievement, idx) => (
                                <li key={idx}>{achievement}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {exp.technologies && exp.technologies.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
            <GraduationCap className="w-8 h-8"/> Educational Background
          </h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500 hidden md:block"></div>
            
            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full border-4 border-slate-900 hidden md:block"></div>
                  
                  <Card className="bg-slate-800/30 backdrop-blur-xl border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 md:ml-16">
                    <CardContent className="p-6">
                      <div className="flex flex-wrap justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                          {edu.institution && <p className="text-purple-400 font-medium">{edu.institution}</p>}
                        </div>
                        <div className="flex items-center gap-2 text-slate-400">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.years}</span>
                        </div>
                      </div>
                      <p className="text-slate-300 leading-relaxed">{edu.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="text-3xl">🛠</span>
            <h2 className="text-3xl font-bold text-white">Skills</h2>
          </div>

          {/* Changed: Removed isLoading check for skills and using static data */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skillsData).map(([category, skills], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-slate-800/30 backdrop-blur-xl border-slate-700/50 h-full">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-white mb-4">
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
