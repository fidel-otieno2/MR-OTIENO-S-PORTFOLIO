import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: 'Software Engineer Intern',
      company: 'Tech Solutions Ltd',
      dates: 'June 2022 - August 2022',
      details: [
        'Built and deployed REST APIs in Node.js for 10K+ daily users.',
        'Optimized React components, reducing page load by 35%.',
        'Collaborated with cross-functional teams to deliver features on time.'
      ]
    },
    {
      role: 'Freelance Developer',
      company: 'Self-Employed',
      dates: 'January 2021 - Present',
      details: [
        'Developed custom web applications for small businesses.',
        'Implemented responsive designs and SEO best practices.',
        'Maintained client communication and project documentation.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Relevant Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {exp.role} - <span className="text-blue-600 dark:text-blue-400">{exp.company}</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-400 italic mb-4">{exp.dates}</p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
