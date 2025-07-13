import React from 'react';
import { Github, Linkedin, Mail, Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/rayeesa163',
      icon: <Github className="h-5 w-5" />
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/s-rayeesa-tabusum-3b2526351',
      icon: <Linkedin className="h-5 w-5" />
    },
    {
      name: 'Email',
      href: 'mailto:srayeesatabusum@gmail.com',
      icon: <Mail className="h-5 w-5" />
    }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <button 
              onClick={scrollToTop}
              className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent hover:scale-105 transition-transform"
            >
              S Rayeesa Tabusum
            </button>
            <p className="text-gray-300 mt-4 text-lg leading-relaxed">
              Software Engineer · AI/ML Engineer · Full Stack Developer
            </p>
            <p className="text-gray-400 mt-2 leading-relaxed">
              Building scalable web apps, intelligent ML systems, and data-driven 
              dashboards that solve real business problems.
            </p>
            
            {/* Contact Info */}
            <div className="mt-6 space-y-2">
              <a 
                href="mailto:srayeesatabusum@gmail.com"
                className="flex items-center text-gray-300 hover:text-indigo-400 transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                srayeesatabusum@gmail.com
              </a>
              <a 
                href="tel:+919866067382"
                className="flex items-center text-gray-300 hover:text-indigo-400 transition-colors"
              >
                📞 +91 98660 67382
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-indigo-400 transition-colors hover:translate-x-1 transform duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Let's Connect</h3>
            <div className="space-y-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="flex items-center text-gray-300 hover:text-indigo-400 transition-colors group"
                >
                  <span className="group-hover:scale-110 transition-transform mr-3">
                    {social.icon}
                  </span>
                  {social.name}
                  {social.href.startsWith('http') && (
                    <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </a>
              ))}
            </div>

            {/* Resume Download */}
            <div className="mt-6">
              <button
                onClick={() => alert('Resume download functionality will be implemented with backend!')}
                className="w-full flex items-center justify-center px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-colors hover:scale-105 transform duration-200"
              >
                📄 Download Resume
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800"></div>

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center text-gray-400 mb-4 md:mb-0">
            <span>© {currentYear} S Rayeesa Tabusum. Made with</span>
            <Heart className="h-4 w-4 mx-2 text-red-500 animate-pulse" />
            <span>and React</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <span className="text-gray-400 text-sm">
              Built with React · TailwindCSS · FastAPI
            </span>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
          aria-label="Scroll to top"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;