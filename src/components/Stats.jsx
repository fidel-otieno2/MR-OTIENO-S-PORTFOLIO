import React, { useState, useEffect, useRef } from 'react';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState({});
  const statsRef = useRef(null);

  const stats = [
    { number: 5, suffix: '+', label: 'Years Experience', icon: '🚀' },
    { number: 50, suffix: '+', label: 'Projects Completed', icon: '💼' },
    { number: 30, suffix: '+', label: 'Happy Clients', icon: '😊' },
    { number: 15, suffix: '+', label: 'Technologies', icon: '⚡' },
    { number: 24, suffix: '/7', label: 'Support Available', icon: '🔧' }
  ];

  const animateNumbers = () => {
    stats.forEach((stat, index) => {
      let current = 0;
      const increment = stat.number / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.number) {
          current = stat.number;
          clearInterval(timer);
        }
        setAnimatedNumbers(prev => ({
          ...prev,
          [index]: Math.floor(current)
        }));
      }, 40);
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          setTimeout(() => animateNumbers(), 300);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid" ref={statsRef}>
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="stat-card fade-in-up" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">
                {isVisible ? (animatedNumbers[index] || 0) : 0}{stat.suffix}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;