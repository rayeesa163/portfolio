import React from 'react';
import { GraduationCap, Code2, Brain, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "B.Tech CSE (AI)",
      description: "Final-year student with 7.5 CGPA"
    },
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Full-Stack Dev",
      description: "End-to-end application development"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI/ML Systems",
      description: "Intelligent solutions & ML pipelines"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "6+ Projects",
      description: "Production-ready deployed applications"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="prose prose-lg text-gray-600 dark:text-gray-300 mb-8">
              <p className="text-xl leading-relaxed mb-6">
                I'm a final-year <span className="font-semibold text-indigo-600 dark:text-indigo-400">B.Tech CSE (AI) student</span> with a strong foundation in full-stack development and AI/ML systems.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                With internships at <span className="font-semibold">JPMorgan Chase</span>, <span className="font-semibold">ExcelR</span>, and <span className="font-semibold">SmartBridge</span>, I've built and deployed <span className="font-semibold text-indigo-600 dark:text-indigo-400">6+ real-world projects</span>—ranging from backend APIs and analytics dashboards to recommendation systems and ML pipelines.
              </p>
              <p className="text-lg leading-relaxed">
                I specialize in delivering <span className="font-semibold text-purple-600 dark:text-purple-400">robust, production-ready applications</span> that are clean, scalable, and impactful.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="group p-4 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:bg-gradient-to-br hover:from-indigo-50 hover:to-purple-50 dark:hover:from-indigo-900/20 dark:hover:to-purple-900/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {highlight.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Visual Element */}
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-3xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
                  RT
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  S Rayeesa Tabusum
                </h3>
                <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                  Software Engineer & AI/ML Expert
                </p>
              </div>
            </div>
            
            {/* Background decorations */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;