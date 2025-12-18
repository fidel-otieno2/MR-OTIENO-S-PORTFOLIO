import React from 'react';

const RotatingTechIcons = () => {
  const techIcons = [
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', name: 'React' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', name: 'JavaScript' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', name: 'Node.js' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', name: 'Python' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', name: 'MongoDB' },
    { icon: null, name: 'AWS' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', name: 'PostgreSQL' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg', name: 'GraphQL' }
  ];

  return (
    <div className="rotating-tech-container">
      {techIcons.map((tech, index) => (
        <div
          key={index}
          className="rotating-tech-icon"
          style={{
            '--rotation': `${index * 45}deg`,
            '--delay': `${index * 0.2}s`
          }}
          title={tech.name}
        >
          {tech.name === 'AWS' ? (
            <div style={{
              width: '100%',
              height: '100%',
              background: '#FF9900',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.8rem',
              fontWeight: 'bold',
              borderRadius: '4px'
            }}>
              AWS
            </div>
          ) : (
            <img src={tech.icon} alt={tech.name} style={{ width: '100%', height: '100%' }} />
          )}
        </div>
      ))}
    </div>
  );
};

export default RotatingTechIcons;