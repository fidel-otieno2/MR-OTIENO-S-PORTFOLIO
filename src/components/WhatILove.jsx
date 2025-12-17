import React from 'react';

const WhatILove = () => {
  const loveItems = [
    {
      title: "Building Digital Excellence",
      description: "I bring 2+ years of experience in full-stack development and DevOps, creating scalable web applications and automation pipelines that improve workflow efficiency.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "Leading Innovation",
      description: "From concept to launch, I lead projects and collaborate with teams using modern tech stacks, ensuring clean, maintainable code and innovative solutions.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "Continuous Growth",
      description: "Passionate about problem-solving, mentoring, and continuous learning, I stay ahead in the fast-moving tech world and contribute to building digital excellence.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&crop=center"
    }
  ];

  return (
    <section className="what-i-love-section">
      <div className="container">
        <div className="section-title">
          <h2>What I Love</h2>
        </div>
        
        <div className="love-grid">
          {loveItems.map((item, index) => (
            <div key={index} className="love-item fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="love-content">
                <h3 className="love-title">{item.title}</h3>
                <p className="love-description">{item.description}</p>
              </div>
              <div className="love-image-container">
                <img src={item.image} alt={item.title} className="love-image" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="resume-button-container">
          <a href="/resume.pdf" className="btn-primary" target="_blank" rel="noopener noreferrer">
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhatILove;