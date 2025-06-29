
import React, { useState } from "react";
import { motion } from "framer-motion";
import { SendEmail } from "@/api/integrations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sean.pesis1@gmail.com", // Updated email address
      href: "mailto:sean.pesis1@gmail.com" // Updated email href
    },
    {
      icon: Phone,
      label: "Phone", 
      value: "054-5608972", // Updated phone number
      href: "tel:0545608972" // Updated phone href
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Israel"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Seanpesis",
      href: "https://github.com/Seanpesis"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/seanpesis",
      href: "https://linkedin.com/in/seanpesis"
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await SendEmail({
        to: "sean.pesis1@gmail.com", // Updated email address for sending
        subject: `New Portfolio Message: ${formData.subject}`, // Updated subject line
        body: `
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}
        `
      });

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
      console.error("Error sending email:", error);
    }

    setIsSubmitting(false);
  };

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
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Let's Connect</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Have an exciting project in mind? Want to collaborate? Or just want to say hello?
            I'm always open to new opportunities and interesting conversations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-slate-800/30 backdrop-blur-xl border-slate-700/50">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Send Me a Message</h2>
                
                {submitStatus === "success" && (
                  <Alert className="mb-6 bg-green-500/20 border-green-500/30 text-green-300">
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription>
                      Message sent successfully! I'll get back to you soon.
                    </AlertDescription>
                  </Alert>
                )}

                {submitStatus === "error" && (
                  <Alert className="mb-6 bg-red-500/20 border-red-500/30 text-red-300">
                    <AlertDescription>
                      There was an error sending your message. Please try again or contact me directly.
                    </AlertDescription>
                  </Alert>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 mb-2 font-medium">Full Name</label>
                      <Input
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your name"
                        required
                        className="bg-slate-700/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 mb-2 font-medium">Email</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your@email.com"
                        required
                        className="bg-slate-700/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-2 font-medium">Subject</label>
                    <Input
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      placeholder="What would you like to discuss?"
                      required
                      className="bg-slate-700/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-2 font-medium">Message</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell me about your project or what interests you..."
                      required
                      rows={6}
                      className="bg-slate-700/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <Card className="bg-slate-800/30 backdrop-blur-xl border-slate-700/50">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center border border-blue-500/30">
                        <info.icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm font-medium">{info.label}</p>
                        {info.href ? (
                          <a 
                            href={info.href}
                            target={info.href.startsWith('http') ? '_blank' : undefined}
                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-white hover:text-blue-400 transition-colors font-medium"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white font-medium">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden bg-slate-900 border border-blue-500/30 shadow-xl shadow-blue-500/10">
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 blur-3xl opacity-20"
                animate={{ 
                  x: ["-20%", "20%", "-20%"]
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut"
                }}
              />
              <CardContent className="relative z-10 p-8 text-center">
                <h3 className="text-xl font-bold text-white mb-4">Let's Build Something Great!</h3>
                <p className="text-slate-300 leading-relaxed">
                  I'm always looking for exciting and innovative projects. 
                  Whether it's a new application, advanced website, or complex technical solution - 
                  I'd love to hear about it and help turn your idea into reality.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
