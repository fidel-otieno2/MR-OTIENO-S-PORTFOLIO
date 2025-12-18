import React from 'react';

const About = () => {

  return (
    <div className="container">
      <div className="section-title scale-in">
        <h2>About Me</h2>
      </div>

      <div className="fade-in-up stagger-1" style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem' }}>
        <h3 style={{ color: 'var(--bright-blue)', marginBottom: '1rem' }}>
          Passionate Full-Stack Developer
        </h3>
        <p style={{ fontSize: '1.125rem', lineHeight: '1.7', color: 'var(--text-light)' }}>
          I'm a dedicated software engineer with a passion for creating exceptional digital experiences. 
          With expertise in modern web technologies, I build scalable solutions that solve real-world problems. 
          I believe in clean code, user-centered design, and continuous learning.
        </p>
        <p style={{ fontSize: '1.125rem', lineHeight: '1.7', color: 'var(--text-light)' }}>
          When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
          or mentoring aspiring developers in the community.
        </p>
      </div>



      {/* What I Do Section */}
      <div className="fade-in-up stagger-2" style={{ marginTop: '4rem' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--text-primary)' }}>
          What I Do
        </h3>
        <div className="grid-3 fade-in-up stagger-4">
          <div className="card">
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎯</div>
              <h4 style={{ color: 'var(--bright-blue)', marginBottom: '1rem' }}>Current Focus</h4>
              <p style={{ color: 'var(--text-light)' }}>
                Building modern web applications with cutting-edge technologies like React, Node.js, 
                and cloud platforms to deliver exceptional user experiences.
              </p>
            </div>
          </div>
          <div className="card">
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📚</div>
              <h4 style={{ color: 'var(--bright-blue)', marginBottom: '1rem' }}>Always Learning</h4>
              <p style={{ color: 'var(--text-light)' }}>
                Continuously exploring new frameworks, cloud technologies, and best practices 
                to stay ahead in the rapidly evolving tech landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
