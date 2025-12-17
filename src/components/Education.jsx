import React from 'react';

const Education = () => {
  const education = [
    {
      degree: 'Full-Stack Web Development Certification',
      institution: 'MORINGA SCHOOL',
      date: '2025',
      description: 'Intensive 6-month program covering modern web development technologies including React, Node.js, databases, and deployment strategies.',
      achievements: [
        'Completed 300+ hours of coursework',
        'Built 5 major projects',
        'Mentored 10+ other students'
      ]
    },
    {
      degree: 'AWS Solutions Architect Associate',
      institution: 'Amazon Web Services',
      date: '2025',
      description: 'Professional certification demonstrating expertise in designing distributed systems on AWS cloud platform.',
      achievements: [
        'Score: 92% on certification exam',
      ]
    },
    {
      degree: 'Continuous Learning & Development',
      institution: 'Various Online Platforms',
      date: '2025 NOVEMBER - Present',
      description: 'Ongoing education through online courses, workshops, and conferences to stay current with emerging technologies and best practices.',
      achievements: [
        'Completed 50+ online courses',
        'Attended 3+ tech conferences',
        'Contributed to 5+ open-source projects'
      ]
    }
  ];

  return (
    <div className="container">
      <div className="section-title">
        <h2>Education & Certifications</h2>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
        <p style={{ fontSize: '1.125rem', color: 'var(--text-light)' }}>
          My educational journey and professional certifications that have shaped my expertise 
          in software development and cloud technologies.
        </p>
      </div>

      <div className="experience-grid">
        {education.map((edu, index) => (
          <div key={index} className="experience-card">
            <div className="experience-title">{edu.degree}</div>
            <div className="experience-company">{edu.institution}</div>
            <div className="experience-date">{edu.date}</div>
            <p style={{ color: 'var(--text-light)', marginBottom: '1rem', lineHeight: '1.6' }}>
              {edu.description}
            </p>
            <div>
              <h4 style={{ color: 'var(--bright-blue)', fontSize: '1rem', marginBottom: '0.5rem' }}>Key Achievements:</h4>
              <ul style={{ color: 'var(--text-light)', paddingLeft: '1.5rem' }}>
                {edu.achievements.map((achievement, i) => (
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

export default Education;
