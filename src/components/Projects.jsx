import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'SyncHUB',
      description: 'A modern, full-stack file synchronization and management platform enabling seamless file sharing and synchronization across multiple devices with real-time updates.',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop',
      technologies: ['React', 'Flask', 'PostgreSQL', 'MinIO', 'JWT', 'Tailwind CSS'],
      demoLink: 'https://sync-hub-app.vercel.app/login',
      githubLink: 'https://github.com/fidel-otieno2/SyncHUB-APP'
    },
    {
      title: 'Wordle Game Clone',
      description: 'A full-stack Wordle game clone with authentication, game state persistence, and statistics tracking. Features animated tiles, keyboard feedback, and color-coded hints.',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop',
      technologies: ['React', 'Vite', 'Flask', 'PostgreSQL', 'JWT', 'Alembic'],
      demoLink: 'https://full-stack-wordle-clone-game.vercel.app/',
      githubLink: 'https://github.com/fidel-otieno2/full-stack-WORDLE-CLONE-game'
    },
    {
      title: 'Wordle CLI Python',
      description: 'A comprehensive CLI implementation of Wordle with user authentication, game statistics tracking, and rich terminal UI. Features daily word challenges, streak tracking, and database persistence.',
      image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=400&h=300&fit=crop',
      technologies: ['Python', 'SQLAlchemy', 'PostgreSQL', 'Alembic', 'Rich', 'bcrypt'],
      demoLink: '#',
      githubLink: 'https://github.com/fidel-otieno2/phase3-wordle-clone'
    },
    {
      title: "Martin's Hospital Website",
      description: 'A comprehensive healthcare website with multi-page navigation, patient management system, appointment booking with conflict detection, and MySQL database integration.',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop',
      technologies: ['Node.js', 'Express', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      demoLink: 'https://martins-hospital.vercel.app/',
      githubLink: 'https://github.com/fidel-otieno2/Martins-hospital'
    },
    {
      title: 'Smart Goal Planner',
      description: 'A modern financial goal tracking application that helps users set, track, and manage their goals. Features include goal creation, deposits, progress updates, filtering, and an overview dashboard.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop',
      technologies: ['React', 'Vite', 'JSON Server', 'REST API', 'CSS'],
      demoLink: 'https://s-g-p-s1so.vercel.app/',
      githubLink: 'https://github.com/fidel-otieno2/S-G-P'
    },
    {
      title: 'Wordle React Edition',
      description: 'A stylish Wordle game clone with beautiful animated tiles, keyboard interactions, and color-coded feedback. Features rainbow backgrounds, twinkling stars, and mobile-responsive design.',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop',
      technologies: ['React', 'Vite', 'CSS Modules', 'LocalStorage'],
      demoLink: 'https://wordle-clone-seven-xi.vercel.app/',
      githubLink: 'https://github.com/fidel-otieno2/wordle-clone'
    }
  ];

  return (
    <div className="container">
      <div className="section-title">
        <h2>My Projects</h2>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
        <p style={{ fontSize: '1.125rem', color: 'var(--text-light)' }}>
          Here are some of my recent projects that showcase my skills in full-stack development, 
          UI/UX design, and problem-solving. Each project represents a unique challenge and solution.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img 
              src={project.image} 
              alt={project.title}
              className="project-image"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjM2I4MmY2Ii8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2cHgiPlByb2plY3Q8L3RleHQ+Cjwvc3ZnPg==';
              }}
            />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="tech-tags">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
                {project.demoLink !== '#' && (
                  <a 
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ 
                      padding: '0.5rem 1rem', 
                      fontSize: '0.875rem',
                      textDecoration: 'none',
                      display: 'inline-block'
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(project.demoLink, '_blank', 'noopener,noreferrer');
                    }}
                  >
                    Live Demo
                  </a>
                )}
                {project.githubLink !== '#' && (
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    style={{ 
                      padding: '0.5rem 1rem', 
                      fontSize: '0.875rem',
                      textDecoration: 'none',
                      display: 'inline-block'
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(project.githubLink, '_blank', 'noopener,noreferrer');
                    }}
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
