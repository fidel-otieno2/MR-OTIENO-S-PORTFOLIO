import React from 'react';

const About = () => {
  return (
    <section id="about" className="min-h-screen pt-16 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">About Me</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          I'm a software engineer specializing in full-stack web development
        </h3>
        <p className="text-gray-700 dark:text-gray-400 mb-6 leading-relaxed max-w-2xl mx-auto">
          With expertise in React, Node.js, Python, Docker, and cloud technologies (AWS),
          I create efficient and scalable solutions that solve real-world problems.
        </p>
        <p className="text-gray-700 dark:text-gray-400 mb-6 leading-relaxed max-w-2xl mx-auto">
          When I'm not coding, you'll find me building AI side projects, contributing to
          open-source communities, or mentoring aspiring developers.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              🎯 Current Focus
            </h4>
            <p className="text-gray-700 dark:text-gray-400">
              Building modern web applications with cutting-edge technologies
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              🌟 What I Love
            </h4>
            <p className="text-gray-700 dark:text-gray-400">
              Clean code, performance optimization, and collaborative development
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              📚 Always Learning
            </h4>
            <p className="text-gray-700 dark:text-gray-400">
              Exploring new frameworks, cloud technologies, and best practices
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
