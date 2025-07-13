import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
    
    alert('Thank you for your message! This form submission will be implemented with backend functionality.');
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "srayeesatabusum@gmail.com",
      link: "mailto:srayeesatabusum@gmail.com",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+91 98660 67382",
      link: "tel:+919866067382",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Github className="h-6 w-6" />,
      title: "GitHub",
      value: "github.com/rayeesa163",
      link: "https://github.com/rayeesa163",
      color: "from-gray-700 to-gray-900"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn",
      value: "linkedin.com/in/s-rayeesa-tabusum-3b2526351",
      link: "https://linkedin.com/in/s-rayeesa-tabusum-3b2526351",
      color: "from-blue-600 to-blue-700"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-6">
            Let's discuss opportunities and build something amazing together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="group flex items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className={`flex-shrink-0 p-4 rounded-xl bg-gradient-to-r ${info.color} text-white group-hover:scale-110 transition-transform`}>
                    {info.icon}
                  </div>
                  <div className="ml-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {info.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 break-all">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Let's Connect!
              </h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm always interested in discussing new opportunities, innovative projects, 
                and collaborations in AI/ML and full-stack development. Whether you're 
                looking for a developer, want to discuss a project, or just want to connect, 
                I'd love to hear from you!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900 dark:text-white transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900 dark:text-white transition-colors"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900 dark:text-white transition-colors resize-none"
                  placeholder="Tell me about your project, opportunity, or just say hello!"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitted}
                className={`w-full flex items-center justify-center px-6 py-4 text-white font-medium rounded-xl transition-all duration-300 ${
                  isSubmitted
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-indigo-600 hover:bg-indigo-700 hover:scale-105'
                } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>

            {/* Form Note */}
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 text-center">
              Your message is important to me. I'll get back to you within 24 hours.
            </p>
          </div>
        </div>

        {/* Quick Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 rounded-3xl text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start a Project?</h3>
            <p className="text-lg mb-6 opacity-90">
              Let's turn your ideas into reality with cutting-edge technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:srayeesatabusum@gmail.com"
                className="inline-flex items-center px-8 py-3 bg-white text-indigo-600 font-medium rounded-xl hover:bg-gray-100 transition-colors"
              >
                <Mail className="h-5 w-5 mr-2" />
                Email Me Directly
              </a>
              <a
                href="https://linkedin.com/in/s-rayeesa-tabusum-3b2526351"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-xl hover:bg-white hover:text-indigo-600 transition-colors"
              >
                <Linkedin className="h-5 w-5 mr-2" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;