import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineering Student',
      company: 'Moringa School',
      date: 'May 2025 - November 2025',
      description: 'Completed intensive software engineering bootcamp, mastering full-stack development with hands-on projects. Collaborated with teams to build real-world applications using modern technologies.',
      achievements: [
        'Built 6+ full-stack projects including SyncHUB and Wordle Game Clone',
        'Mastered React, Flask, Node.js, PostgreSQL, and Python',
        'Graduated November 14th, 2025 with comprehensive software engineering skills'
      ]
    },
    {
      title: 'Soft Skills Training',
      company: 'AMI (African Management Institute)',
      date: '2025',
      description: 'Completed comprehensive soft skills training program covering essential professional competencies for workplace success and team collaboration.',
      achievements: [
        'Completed all 10 soft skills modules',
        'Earned certification in professional development',
        'Enhanced communication, leadership, and teamwork abilities'
      ]
    }
  ];

  return (
    <div className="container">
      <div className="section-title">
        <h2>Work Experience</h2>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
        <p style={{ fontSize: '1.125rem', color: 'var(--text-light)' }}>
          My educational journey and training in software engineering. Fresh graduate with hands-on experience 
          building real-world applications and strong foundation in both technical and soft skills.
        </p>
      </div>

      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-title">{exp.title}</div>
            <div className="experience-company">{exp.company}</div>
            <div className="experience-date">{exp.date}</div>
            <p style={{ color: 'var(--text-light)', marginBottom: '1rem', lineHeight: '1.6' }}>
              {exp.description}
            </p>
            <div>
              <h4 style={{ color: 'var(--bright-blue)', fontSize: '1rem', marginBottom: '0.5rem' }}>Key Achievements:</h4>
              <ul style={{ color: 'var(--text-light)', paddingLeft: '1.5rem' }}>
                {exp.achievements.map((achievement, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
