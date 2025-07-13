import React, { useState } from 'react';
import { ExternalLink, Github, Zap, Brain, BarChart3, Home, MessageSquare, Users } from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: "AI Career Mentor",
      description: "Matched resumes to job descriptions using TF-IDF; improved job fit by 35%.",
      fullDescription: "An intelligent career mentoring system that analyzes resumes and matches them with relevant job descriptions using advanced NLP techniques. The system provides personalized career recommendations and skill gap analysis.",
      tech: ["Python", "Streamlit", "Docker", "TF-IDF", "NLP"],
      category: "ai",
      icon: <Brain className="h-6 w-6" />,
      image: "🤖",
      metrics: "35% improvement in job fit accuracy",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "E-commerce Recommender",
      description: "Achieved 92% precision with a content-based product recommender system.",
      fullDescription: "A sophisticated product recommendation engine for e-commerce platforms using content-based filtering and machine learning algorithms to provide personalized product suggestions.",
      tech: ["Flask", "NLP", "Scikit-learn", "Python", "REST API"],
      category: "ml",
      icon: <Zap className="h-6 w-6" />,
      image: "🛍️",
      metrics: "92% precision rate",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Freemium Analytics Dashboard",
      description: "Built funnel & cohort dashboards with SQL and Power BI; revealed 20% churn reduction insights.",
      fullDescription: "Comprehensive analytics dashboard for freemium business models featuring funnel analysis, cohort studies, and churn prediction to help businesses optimize their conversion strategies.",
      tech: ["Power BI", "SQL", "Python", "Data Visualization"],
      category: "analytics",
      icon: <BarChart3 className="h-6 w-6" />,
      image: "📊",
      metrics: "20% churn reduction insights",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Housing Trends Visualizer",
      description: "ETL pipeline + dashboard to track housing price trends across regions.",
      fullDescription: "Real estate analytics platform with automated ETL pipelines that processes housing market data and provides interactive visualizations for tracking price trends across different geographical regions.",
      tech: ["Flask", "Tableau", "ETL", "Python", "Data Pipeline"],
      category: "analytics",
      icon: <Home className="h-6 w-6" />,
      image: "🏠",
      metrics: "Real-time market insights",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "RealityGPT",
      description: "Multimodal simulator for business decisions combining GPT, forecasting, and voice input.",
      fullDescription: "An innovative business decision simulator that combines GPT models with predictive forecasting and voice input capabilities to help businesses model and test different scenarios.",
      tech: ["Streamlit", "OpenAI", "Prophet", "FastAPI", "Voice AI"],
      category: "ai",
      icon: <MessageSquare className="h-6 w-6" />,
      image: "🎯",
      metrics: "Multimodal AI integration",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Customer360",
      description: "Retention and segmentation dashboard for subscription users with churn prediction.",
      fullDescription: "Comprehensive customer analytics platform providing 360-degree customer insights including retention analysis, user segmentation, and predictive churn modeling for subscription-based businesses.",
      tech: ["Scikit-learn", "Power BI", "Python", "ML Pipeline"],
      category: "ml",
      icon: <Users className="h-6 w-6" />,
      image: "👥",
      metrics: "Advanced churn prediction",
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'ai', name: 'AI/ML', count: projects.filter(p => p.category === 'ai').length },
    { id: 'ml', name: 'Machine Learning', count: projects.filter(p => p.category === 'ml').length },
    { id: 'analytics', name: 'Analytics', count: projects.filter(p => p.category === 'analytics').length }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const handleProjectClick = (project) => {
    alert(`${project.title}\n\n${project.fullDescription}\n\nNote: Demo links will be implemented with backend!`);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-6">
            6+ production-ready applications solving real business problems
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-600'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group bg-white dark:bg-gray-900 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              {/* Project Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{project.image}</div>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg group-hover:scale-110 transition-transform">
                      {project.icon}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-4">
                  {project.metrics}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="px-6 pb-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Actions */}
              <div className="px-6 pb-6">
                <div className="flex space-x-3">
                  <button
                    onClick={() => handleProjectClick(project)}
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors group-hover:scale-105"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </button>
                  <button
                    onClick={() => alert('GitHub links will be implemented with backend!')}
                    className="flex items-center justify-center px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg transition-colors"
                  >
                    <Github className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Stats */}
        <div className="mt-16 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-8 rounded-3xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Project Impact
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">6+</div>
                <div className="text-gray-600 dark:text-gray-300">Deployed Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">92%</div>
                <div className="text-gray-600 dark:text-gray-300">Max Precision</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">35%</div>
                <div className="text-gray-600 dark:text-gray-300">Performance Boost</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">100%</div>
                <div className="text-gray-600 dark:text-gray-300">Production Ready</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;