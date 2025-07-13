import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-6">
            Academic foundation in Computer Science and Artificial Intelligence
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300">
            {/* Education Header */}
            <div className="flex items-start space-x-6 mb-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <GraduationCap className="h-8 w-8" />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Bachelor of Technology in Computer Science Engineering (AI)
                </h3>
                <p className="text-xl text-indigo-600 dark:text-indigo-400 font-semibold mb-3">
                  Ravindra College of Engineering for Women
                </p>
                
                <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>2022 – 2026</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>India</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-4 w-4 mr-2" />
                    <span className="font-semibold text-green-600 dark:text-green-400">Expected CGPA: 7.5</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Course Highlights */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Core Subjects */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                  Core Computer Science
                </h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Data Structures & Algorithms</li>
                  <li>• Object-Oriented Programming</li>
                  <li>• Database Management Systems</li>
                  <li>• Software Engineering</li>
                  <li>• Computer Networks</li>
                  <li>• Operating Systems</li>
                </ul>
              </div>

              {/* AI/ML Specialization */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  AI/ML Specialization
                </h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Machine Learning</li>
                  <li>• Deep Learning</li>
                  <li>• Natural Language Processing</li>
                  <li>• Computer Vision</li>
                  <li>• Data Mining</li>
                  <li>• Artificial Intelligence</li>
                </ul>
              </div>
            </div>

            {/* Academic Achievements */}
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Academic Highlights
              </h4>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl">
                  <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">7.5</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Expected CGPA</div>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-2xl">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">4</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years Program</div>
                </div>
                <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-2xl">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">2026</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Graduation Year</div>
                </div>
              </div>
            </div>

            {/* Relevant Coursework */}
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Key Projects & Coursework
              </h4>
              <div className="flex flex-wrap gap-3">
                {[
                  "Machine Learning Projects",
                  "Web Development",
                  "Data Analytics",
                  "AI Systems Design",
                  "Full-Stack Applications",
                  "Research Methods"
                ].map((course, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;