import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await fetch('https://formspree.io/f/xkgqybzj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `New Contact Form Submission from ${formData.name}`
        })
      });
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('');
      }, 5000);
      
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
      
      setTimeout(() => {
        setSubmitStatus('');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      style={{ 
        backgroundImage: 'url("/open.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        position: 'relative',
        minHeight: '100vh'
      }}
    >
      {/* Fading overlay */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.7) 0%, rgba(30, 41, 59, 0.6) 50%, rgba(15, 23, 42, 0.7) 100%)',
          zIndex: 1
        }}
      />
      
      {/* Content wrapper */}
      <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 1rem', position: 'relative', zIndex: 2 }}>
        <style>{`
          @media (min-width: 768px) {
            .contact-wrapper { padding: 0 2rem !important; }
          }
          @media (min-width: 1024px) {
            .contact-wrapper { padding: 0 3rem !important; }
          }
        `}</style>
      <div className="section-title">
        <h2>Get In Touch</h2>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '2rem', maxWidth: '1000px', margin: '0 auto 2rem', padding: '0 1rem' }}>
        <style>{`
          @media (min-width: 768px) {
            .hero-text { margin-bottom: 4rem !important; }
          }
        `}</style>
        <h3 style={{ color: 'var(--bright-blue)', marginBottom: '1rem', fontSize: '1.5rem' }}>
        <style>{`
          @media (min-width: 768px) {
            .hero-title { font-size: 2rem !important; }
          }
        `}</style>
          Fidel Otieno Martins
        </h3>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '2rem' }}>
        <style>{`
          @media (min-width: 768px) {
            .hero-description { font-size: 1.4rem !important; }
          }
        `}</style>
          Full Stack Developer passionate about building scalable web applications and creating exceptional digital experiences.
        </p>
      </div>

      {/* Quick Links Section */}
      <div style={{ marginBottom: '4rem' }}>
        <h3 style={{ textAlign: 'center', color: 'var(--bright-blue)', marginBottom: '2rem', fontSize: '1.3rem' }}>
          Quick Links
        </h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', 
          gap: '1rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
        <style>{`
          @media (min-width: 768px) {
            .quick-links-grid { 
              grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)) !important;
              gap: 1.5rem !important;
            }
          }
        `}</style>
          {['About', 'Skills', 'Projects', 'Experience', 'Services', 'Contact'].map((link, index) => (
            <a 
              key={index}
              href={`#${link.toLowerCase()}`}
              style={{
                color: 'var(--text-light)',
                textDecoration: 'none',
                padding: '0.75rem 1rem',
                background: 'rgba(59, 130, 246, 0.1)',
                borderRadius: '0.5rem',
                border: '1px solid rgba(59, 130, 246, 0.3)',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                fontWeight: '500'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'var(--bright-blue)';
                e.target.style.color = 'white';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(59, 130, 246, 0.1)';
                e.target.style.color = 'var(--text-light)';
                e.target.style.transform = 'translateY(0)';
              }}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(link.toLowerCase());
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {link}
            </a>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div style={{ marginBottom: '4rem' }}>
        <h3 style={{ textAlign: 'center', color: 'var(--bright-blue)', marginBottom: '2rem', fontSize: '1.3rem' }}>
          Services
        </h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '1rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
        <style>{`
          @media (min-width: 768px) {
            .services-grid { 
              grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) !important;
              gap: 2rem !important;
            }
          }
        `}</style>
          {['Full-Stack Development', 'Web Development', 'API Development', 'Database Design'].map((service, index) => (
            <div 
              key={index}
              style={{
                background: 'rgba(30, 41, 59, 0.6)',
                padding: '1.5rem',
                borderRadius: '1rem',
                border: '2px solid rgba(59, 130, 246, 0.2)',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--bright-blue)';
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(59, 130, 246, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <h4 style={{ color: 'var(--bright-blue)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>
                {service}
              </h4>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', alignItems: 'start' }}>
        <style>{`
          @media (min-width: 1024px) {
            .contact-grid { 
              grid-template-columns: 1fr 1fr !important;
              gap: 6rem !important;
            }
          }
        `}</style>
        {/* Contact Form */}
        <div className="contact-form" style={{ maxWidth: 'none' }}>
          {submitStatus === 'success' && (
            <div 
              style={{
                background: 'rgba(34, 197, 94, 0.1)',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                color: '#22c55e',
                padding: '1rem',
                borderRadius: '0.5rem',
                marginBottom: '2rem',
                textAlign: 'center'
              }}
            >
              ✅ Thank you! Your message has been sent successfully. I'll get back to you soon!
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div 
              style={{
                background: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                color: '#ef4444',
                padding: '1rem',
                borderRadius: '0.5rem',
                marginBottom: '2rem',
                textAlign: 'center'
              }}
            >
              ❌ Sorry, there was an error sending your message. Please try again or contact me directly.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                placeholder="Your full name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-input"
                placeholder="What would you like to discuss?"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-input"
                placeholder="Tell me about your project, timeline, budget, or any questions you have..."
                rows="6"
                required
              />
            </div>

            <button 
              type="submit" 
              className="btn-primary"
              disabled={isSubmitting}
              style={{ 
                width: '100%', 
                marginTop: '1rem',
                opacity: isSubmitting ? 0.7 : 1,
                cursor: isSubmitting ? 'not-allowed' : 'pointer'
              }}
            >
              {isSubmitting ? '🚀 Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
        
        {/* Contact Information */}
        <div>
          <h3 style={{ color: 'var(--bright-blue)', marginBottom: '2rem', fontSize: '1.5rem' }}>
            Contact Information
          </h3>
          
          {/* Location */}
          <div style={{ marginBottom: '3rem', background: 'rgba(30, 41, 59, 0.4)', padding: '2rem', borderRadius: '1rem', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
            <h4 style={{ color: 'var(--bright-blue)', marginBottom: '1.5rem', fontSize: '1.4rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              Location
            </h4>
            <p style={{ color: 'var(--text-light)', fontSize: '1.2rem', marginLeft: '2rem' }}>
              Nairobi, Kenya
            </p>
          </div>
          
          {/* Phone Numbers */}
          <div style={{ marginBottom: '3rem', background: 'rgba(30, 41, 59, 0.4)', padding: '2rem', borderRadius: '1rem', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
            <h4 style={{ color: 'var(--bright-blue)', marginBottom: '1.5rem', fontSize: '1.4rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              Phone Number
            </h4>
            <div style={{ marginLeft: '2rem' }}>
              <p style={{ color: 'var(--text-light)', fontSize: '1.2rem' }}>
                +254 778 864 882
              </p>
            </div>
          </div>
          
          {/* Email */}
          <div style={{ marginBottom: '3rem', background: 'rgba(30, 41, 59, 0.4)', padding: '2rem', borderRadius: '1rem', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
            <h4 style={{ color: 'var(--bright-blue)', marginBottom: '1.5rem', fontSize: '1.4rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              Email
            </h4>
            <p style={{ color: 'var(--text-light)', fontSize: '1.2rem', marginLeft: '2rem' }}>
              fidelmartins05@gmail.com
            </p>
          </div>
          
          {/* Social Links */}
          <div style={{ marginTop: '2rem' }}>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.2rem' }}>
              🌐 Connect With Me
            </h4>
            <div className="social-icons" style={{ justifyContent: 'flex-start', marginLeft: '1.5rem' }}>
              <a href="https://github.com/fidel-otieno2" className="social-icon" target="_blank" rel="noopener noreferrer" title="GitHub">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/in/fidel-otieno" className="social-icon" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://twitter.com/fidel_otieno" className="social-icon" target="_blank" rel="noopener noreferrer" title="Twitter/X">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://instagram.com/fidel_otieno" className="social-icon" target="_blank" rel="noopener noreferrer" title="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://facebook.com/fidel.otieno" className="social-icon" target="_blank" rel="noopener noreferrer" title="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="https://wa.me/254778864882" className="social-icon" target="_blank" rel="noopener noreferrer" title="WhatsApp">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div style={{ 
        textAlign: 'center', 
        marginTop: '4rem', 
        paddingTop: '2rem', 
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        color: 'var(--text-muted)'
      }}>
        <p>© 2025 Fidel Otieno Martins. All rights reserved</p>
      </div>
    </div>
    </div>
  );
};

export default Contact;