import React, { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedPercentages, setAnimatedPercentages] = useState({});
  const skillsRef = useRef(null);

  const skills = [
    { name: 'React', percentage: 70, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'JavaScript', percentage: 70, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Node.js', percentage: 65, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Python', percentage: 60, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Flask', percentage: 70, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
    { name: 'PostgreSQL', percentage: 68, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'AWS', percentage: 65, icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
    { name: 'Git', percentage: 92, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'MySQL', percentage: 65, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'GraphQL', percentage: 66, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' }
  ];

  const animateCounters = () => {
    skills.forEach((skill, index) => {
      let current = 0;
      const increment = skill.percentage / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= skill.percentage) {
          current = skill.percentage;
          clearInterval(timer);
        }
        setAnimatedPercentages(prev => ({
          ...prev,
          [index]: Math.floor(current)
        }));
      }, 30);
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          setTimeout(() => animateCounters(), 500);
        }
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const technologies = [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'AWS', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
    { name: 'REST APIs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' }
  ];

  return (
    <div className="container">
      <div className="section-title">
        <h2>My Skills</h2>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
        <p style={{ fontSize: '1.125rem', color: 'var(--text-light)' }}>
          Here are the technologies and tools I work with to bring ideas to life. 
          I'm always learning and expanding my skill set to stay current with industry trends.
        </p>
      </div>

      <div className="skills-grid" ref={skillsRef}>
        {skills.map((skill, index) => (
          <div key={index} className="skill-card fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
            {skill.name === 'AWS' ? (
              <div className="skill-icon" style={{ 
                background: '#FF9900', 
                color: 'white', 
                borderRadius: '4px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontSize: '1.2rem', 
                fontWeight: 'bold',
                width: '3rem',
                height: '3rem'
              }}>
                AWS
              </div>
            ) : (
              <img src={skill.icon} alt={skill.name} className="skill-icon" />
            )}
            <div className="skill-name">
              <span>{skill.name}</span>
              <span className="skill-percentage">
                {isVisible ? (animatedPercentages[index] || 0) : 0}%
              </span>
            </div>
            <div className="progress-bar-container">
              <div 
                className="progress-bar" 
                style={{ 
                  '--target-width': isVisible ? `${skill.percentage}%` : '0%',
                  animationDelay: `${index * 0.1 + 0.5}s`,
                  width: isVisible ? `${skill.percentage}%` : '0%',
                  transition: `width 2s ease-out ${index * 0.1 + 0.5}s`
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Skills Section */}
      <div style={{ marginTop: '4rem' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--text-primary)' }}>
          Technologies I Work With
        </h3>
        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-item fade-in-up" style={{ animationDelay: `${index * 0.05}s` }}>
              {tech.name === 'AWS' ? (
                <div className="tech-icon" style={{ 
                  background: '#FF9900', 
                  color: 'white', 
                  borderRadius: '4px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontSize: '1rem', 
                  fontWeight: 'bold',
                  width: '2.5rem',
                  height: '2.5rem'
                }}>
                  AWS
                </div>
              ) : (
                <img src={tech.icon} alt={tech.name} className="tech-icon" />
              )}
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
