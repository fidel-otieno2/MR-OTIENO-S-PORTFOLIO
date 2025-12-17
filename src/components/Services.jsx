import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Full-Stack Web Development",
      description: "Crafting responsive and efficient web applications using modern technologies like React, Node.js, and Express, focused on seamless user experiences and maintainable code.",
      images: [
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop&crop=center", 
        "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=300&h=200&fit=crop&crop=center"
      ]
    },
    {
      title: "Soft Skills & Leadership",
      description: "Strong communication, team collaboration, problem-solving abilities, and mentoring skills that drive project success and foster positive team dynamics.",
      images: [
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300&h=200&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=300&h=200&fit=crop&crop=center"
      ]
    },
    {
      title: "API Design & Integration", 
      description: "Developing secure, scalable RESTful APIs and integrating third-party services to ensure smooth communication between applications.",
      images: [
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&h=200&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop&crop=center"
      ]
    },
    {
      title: "Database Architecture",
      description: "Designing and optimizing SQL and NoSQL databases for high performance, reliability, and scalability in production environments.",
      images: [
        "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=300&h=200&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=300&h=200&fit=crop&crop=center", 
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop&crop=center"
      ]
    }
  ];

  return (
    <section className="services-section">
      <div className="container">
        <div className="section-title">
          <h2>What I Do</h2>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-images">
                {service.images.map((image, imgIndex) => (
                  <img 
                    key={imgIndex} 
                    src={image} 
                    alt={`${service.title} ${imgIndex + 1}`}
                    className="service-image"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;