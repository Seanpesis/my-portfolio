
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Home, User, Briefcase, Mail, Download, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Add favicon
  useEffect(() => {
    const favicon = document.querySelector("link[rel*='icon']") || document.createElement('link');
    favicon.type = 'image/x-icon';
    favicon.rel = 'shortcut icon';
    favicon.href = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%233B82F6;stop-opacity:1" /><stop offset="100%" style="stop-color:%239333EA;stop-opacity:1" /></linearGradient></defs><circle cx="50" cy="50" r="45" fill="url(%23grad1)"/><text x="50" y="65" font-size="30" font-family="Arial, sans-serif" font-weight="bold" fill="white" text-anchor="middle">SP</text></svg>';
    document.getElementsByTagName('head')[0].appendChild(favicon);
  }, []);

  const navigationItems = [
    { name: "Home", url: createPageUrl("Home"), icon: Home },
    { name: "About", url: createPageUrl("About"), icon: User },
    { name: "Projects", url: createPageUrl("Projects"), icon: Briefcase },
    { name: "Contact", url: createPageUrl("Contact"), icon: Mail },
  ];

  const isActive = (url) => location.pathname === url;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
      <style>
        {`
          :root {
            --primary-gradient: linear-gradient(135deg, #3B82F6 0%, #9333EA 100%);
            --card-bg: rgba(30, 41, 59, 0.3);
            --border-color: rgba(71, 85, 105, 0.5);
          }
          
          .smooth-scroll {
            scroll-behavior: smooth;
          }
          
          .backdrop-blur-xl {
            backdrop-filter: blur(24px);
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fade-in-up {
            animation: fadeInUp 0.6s ease-out forwards;
          }
        `}
      </style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link 
              to={createPageUrl("Home")} 
              className="text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-300"
              onClick={closeMobileMenu}
            >
              Sean Pesis Portfolio
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.url}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    isActive(item.url)
                      ? "bg-blue-500/20 text-blue-400 shadow-lg shadow-blue-500/20"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </Link>
              ))}
              <a
                href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/7a78b88bd_SeanPesis_CV-NEW.pdf"
                download
                className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>

            {/* Mobile Navigation Toggle */}
            <div className="md:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="text-slate-300 hover:text-white p-2 rounded-lg hover:bg-slate-800/50 transition-colors duration-300"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-slate-800/50 overflow-hidden"
            >
              <div className="px-6 py-4 space-y-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.url}
                    onClick={closeMobileMenu}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      isActive(item.url)
                        ? "bg-blue-500/20 text-blue-400"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-slate-800/50">
                  <a
                    href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/7a78b88bd_SeanPesis_CV-NEW.pdf"
                    download
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-medium"
                  >
                    <Download className="w-5 h-5" />
                    Download CV
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Overlay for mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={closeMobileMenu}
          />
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950/80 backdrop-blur-xl border-t border-slate-800/50 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center">
            <p className="text-slate-400 mb-4">© 2025 Sean Pesis Portfolio. All rights reserved.</p>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/Seanpesis" target="_blank" rel="noopener noreferrer" 
                 className="text-slate-400 hover:text-white transition-colors duration-300">
                GitHub
              </a>
              <a href="https://linkedin.com/in/seanpesis" target="_blank" rel="noopener noreferrer"
                 className="text-slate-400 hover:text-white transition-colors duration-300">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
