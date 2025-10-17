import React from 'react';

const Education = () => {
  const education = [
    {
      degree: 'B.Sc. in Computer Science',
      institution: 'University of Nairobi',
      year: '2023',
      icon: '🎓',
      description: 'Specialized in Software Engineering and Data Structures'
    },
    {
      degree: 'AWS Certified Solutions Architect',
      institution: 'Amazon Web Services',
      year: '2024',
      icon: '☁️',
      description: 'Cloud architecture and deployment expertise'
    },
    {
      degree: 'Google Cloud Professional Data Engineer',
      institution: 'Google Cloud',
      year: '2023',
      icon: '📊',
      description: 'Big data processing and machine learning'
    },
    {
      degree: 'Full Stack Web Development',
      institution: 'Moringa School',
      year: '2022',
      icon: '💻',
      description: 'Modern web technologies and frameworks'
    }
  ];

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="fade-in-up">
        <h2 className="text-center mb-12">🎓 Education & Certifications</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div 
              key={index} 
              className="card hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="rotating-icon text-4xl">
                  {edu.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-yellow-400 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-orange-400 font-semibold mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-green-400 mb-3">
                    {edu.year}
                  </p>
                  <p className="text-gray-300 text-sm">
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
