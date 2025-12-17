import React, { useState } from 'react';

const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Education', id: 'education' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav>
      <div className="nav-container">
        <a 
          href="#home" 
          className="logo"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
        >
          <img 
            src="/open.jpeg" 
            alt="FIDEL OTIENO MARTINS" 
            className="nav-profile-pic"
          />
          FIDEL OTIENO MARTINS
        </a>

        {/* Desktop Navigation */}
        <div className="nav-links">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg"
          style={{
            background: 'rgba(59, 130, 246, 0.1)',
            border: '2px solid var(--bright-blue)',
            color: 'var(--bright-blue)'
          }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div 
          className="md:hidden pb-4"
          style={{
            background: 'rgba(10, 25, 47, 0.95)',
            backdropFilter: 'blur(10px)',
            borderTop: '1px solid rgba(59, 130, 246, 0.2)',
            marginTop: '1rem',
            padding: '1rem 2rem 0'
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link block py-2 ${activeSection === item.id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
