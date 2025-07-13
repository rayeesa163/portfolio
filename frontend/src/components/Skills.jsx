import React from 'react';
import { Code, Database, Cloud, Brain, Wrench, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["Python", "Java", "JavaScript", "SQL", "HTML/CSS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Frameworks",
      icon: <Wrench className="h-6 w-6" />,
      skills: ["Flask", "Streamlit", "React (Basic)", "Bootstrap"],
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Backend/DevOps",
      icon: <Database className="h-6 w-6" />,
      skills: ["REST APIs", "Docker", "GitHub Actions", "Swagger", "CI/CD"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6" />,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "ML/Analytics",
      icon: <Brain className="h-6 w-6" />,
      skills: ["TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Power BI", "Tableau"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Cloud",
      icon: <Cloud className="h-6 w-6" />,
      skills: ["AWS (EC2, S3)", "GCP (Basic)", "Firebase Hosting"],
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Other",
      icon: <Wrench className="h-6 w-6" />,
      skills: ["System Design (Basic)", "JWT/OAuth2", "Agile/Scrum"],
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Soft Skills",
      icon: <Users className="h-6 w-6" />,
      skills: ["Problem Solving", "Communication", "Collaboration", "Ownership"],
      color: "from-emerald-500 to-green-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-6">
            Technical expertise across the full development stack
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="group bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700"
            >
              {/* Header */}
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mr-3 group-hover:scale-110 transition-transform`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="px-3 py-2 bg-gray-50 dark:bg-gray-800 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Stack Summary */}
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Technical Proficiency
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-3">
              {["Python", "JavaScript", "React", "Flask", "TensorFlow", "AWS", "Docker", "MongoDB"].map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full text-sm font-medium hover:scale-110 transition-transform cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;