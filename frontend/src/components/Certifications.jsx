import React from 'react';
import { Award, ExternalLink, Star, Trophy, Target } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "JPMorgan Forage SWE Internship",
      issuer: "JPMorgan Chase",
      type: "Professional Experience",
      icon: "🏛️",
      color: "from-blue-600 to-indigo-600"
    },
    {
      title: "Git Version Control",
      issuer: "Coursera",
      type: "Technical Skill",
      icon: "🔧",
      color: "from-green-600 to-emerald-600"
    },
    {
      title: "Python Programming",
      issuer: "Coursera",
      type: "Programming",
      icon: "🐍",
      color: "from-yellow-600 to-orange-600"
    },
    {
      title: "SQL Database Management",
      issuer: "Coursera",
      type: "Database",
      icon: "🗄️",
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Python & Analytics",
      issuer: "IBM SkillsBuild",
      type: "Data Analytics",
      icon: "📊",
      color: "from-cyan-600 to-blue-600"
    },
    {
      title: "Deep Learning Fundamentals",
      issuer: "NVIDIA",
      type: "AI/ML",
      icon: "🧠",
      color: "from-indigo-600 to-purple-600"
    }
  ];

  const achievements = [
    {
      title: "Finalist – ExcelR Showcase",
      description: "Top performer in AI internship showcase presentation",
      icon: <Trophy className="h-6 w-6" />,
      color: "text-yellow-600"
    },
    {
      title: "Top 5% – SmartBridge Internship",
      description: "Exceptional performance in data analytics internship",
      icon: <Star className="h-6 w-6" />,
      color: "text-blue-600"
    },
    {
      title: "6+ End-to-End Deployed Projects",
      description: "Successfully built and deployed production-ready applications",
      icon: <Target className="h-6 w-6" />,
      color: "text-green-600"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-6">
            Professional certifications and notable achievements
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="group bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700"
              >
                {/* Certificate Header */}
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{cert.icon}</div>
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${cert.color} text-white group-hover:scale-110 transition-transform`}>
                    <Award className="h-5 w-5" />
                  </div>
                </div>

                {/* Certificate Info */}
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {cert.title}
                </h4>
                
                <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">
                  {cert.issuer}
                </p>

                <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                  {cert.type}
                </span>

                {/* Action Button */}
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <button 
                    onClick={() => alert('Certificate verification links will be implemented with backend!')}
                    className="w-full flex items-center justify-center px-4 py-2 bg-gray-50 dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm font-medium rounded-xl transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Certificate
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Notable Achievements
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="group bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700 text-center"
              >
                <div className={`inline-flex p-4 rounded-full bg-gray-50 dark:bg-gray-800 ${achievement.color} mb-6 group-hover:scale-110 transition-transform`}>
                  {achievement.icon}
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {achievement.title}
                </h4>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Summary */}
        <div className="mt-16 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-8 rounded-3xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Professional Recognition
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">6+</div>
                <div className="text-gray-600 dark:text-gray-300">Certifications</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">3</div>
                <div className="text-gray-600 dark:text-gray-300">Major Platforms</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">Top 5%</div>
                <div className="text-gray-600 dark:text-gray-300">Performance</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">100%</div>
                <div className="text-gray-600 dark:text-gray-300">Completion Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;