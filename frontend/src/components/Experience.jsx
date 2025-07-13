import React from 'react';
import { Building, Calendar, Trophy, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "JPMorgan Chase",
      role: "Virtual SWE Intern",
      period: "2024",
      type: "Virtual Internship",
      achievements: [
        "Built stock analyzer using internal APIs & data streaming",
        "Completed Forage simulation with real-world business logic"
      ],
      skills: ["Python", "APIs", "Data Streaming", "Financial Systems"],
      logo: "🏛️"
    },
    {
      company: "ExcelR",
      role: "AI Intern",
      period: "Apr–Jul 2024",
      type: "Internship",
      achievements: [
        "Built customer classification model using TensorFlow (85%+ accuracy)",
        "Finalist in ExcelR Showcase presentation"
      ],
      skills: ["TensorFlow", "Machine Learning", "Python", "Data Analysis"],
      logo: "🤖"
    },
    {
      company: "SmartBridge",
      role: "Data Analyst Intern",
      period: "May–Jun 2025",
      type: "Internship",
      achievements: [
        "Built automated KPI dashboards using Flask + SQL",
        "Improved metric accuracy by 30% via clean ETL logic"
      ],
      skills: ["Flask", "SQL", "Power BI", "ETL", "Data Visualization"],
      logo: "📊"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-6">
            Professional experience across top-tier companies
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-gray-200 dark:border-gray-700"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10 grid lg:grid-cols-4 gap-6 items-start">
                {/* Company Info */}
                <div className="lg:col-span-1">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">{exp.logo}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {exp.company}
                      </h3>
                      <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                        {exp.role}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  
                  <span className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 text-xs font-medium rounded-full">
                    {exp.type}
                  </span>
                </div>

                {/* Achievements */}
                <div className="lg:col-span-2">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <Trophy className="h-5 w-5 mr-2 text-yellow-500" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li 
                        key={achievementIndex}
                        className="flex items-start space-x-3 text-gray-600 dark:text-gray-300"
                      >
                        <div className="flex-shrink-0 w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div className="lg:col-span-1">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Summary */}
        <div className="mt-16 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-8 rounded-3xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Impact
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">3+</div>
                <div className="text-gray-600 dark:text-gray-300">Internships</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">85%+</div>
                <div className="text-gray-600 dark:text-gray-300">ML Model Accuracy</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">30%</div>
                <div className="text-gray-600 dark:text-gray-300">Metric Improvement</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;