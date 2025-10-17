import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: '💻 Frontend Arsenal',
      icon: '⚙️',
      skills: ['React' ,'Javascript']
    },
    {
      title: '🔧 Backend Mastery',
      icon: '🔋',
      skills: ['Node.js', 'Python', 'REST APIs', 'PostgreSQL']
    },
    {
      title: '☁️ Cloud & DevOps',
      icon: '🚀',
      skills: ['GitHub Actions']
    },
    {
      title: '🛠️ Hacker Tools',
      icon: '🔍',
      skills: ['Git', 'Jest', 'Figma', 'VS Code', 'Postman', 'Agile/Scrum']
    }
  ];

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="fade-in-up">
        <h2 className="text-center mb-16">💪 Elite Skills & Technologies</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="card hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center mb-6">
                <div className="rotating-icon text-5xl mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-yellow-400">
                  {category.title}
                </h3>
              </div>
              
              <div className="tech-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="tech-item"
                    style={{ animationDelay: `${(index * 0.2) + (skillIndex * 0.1)}s` }}
                  >
                    <span className="text-sm font-semibold">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-xl text-gray-300 mb-8">
            🔥 Constantly evolving, always dominating the digital battlefield 🔥
          </p>
          <div className="flex justify-center gap-6 text-3xl">
            <div className="rotating-icon text-red-400">🔥</div>
            <div className="rotating-icon text-yellow-400" style={{animationDelay: '0.5s'}}>⚡</div>
            <div className="rotating-icon text-green-400" style={{animationDelay: '1s'}}>🚀</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
