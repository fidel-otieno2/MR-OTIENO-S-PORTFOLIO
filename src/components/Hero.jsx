import React, { useState } from 'react';
import RotatingTechIcons from './RotatingTechIcons';

const Hero = () => {
  const [showCelebration, setShowCelebration] = useState(false);
  const [isHiring, setIsHiring] = useState(false);

  const sendSMS = async (message) => {
    try {
      await fetch('https://api.textbelt.com/text', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          phone: '+254778864882', // Your actual phone number
          message: message,
          key: 'textbelt'
        })
      });
    } catch (error) {
      console.error('SMS error:', error);
    }
  };

  const handleHireClick = async () => {
    setIsHiring(true);
    
    try {
      // Send congratulations email
      await fetch('https://formspree.io/f/xkgqybzj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: 'Portfolio Visitor',
          email: 'noreply@portfolio.com',
          message: '🎉 CONGRATULATIONS! Someone just clicked "Hire The Legend" on your portfolio! A potential client is interested in your legendary skills! 🚀💎⚡',
          _subject: '🎉 HIRE ALERT: Someone Wants to Hire The Legend!'
        })
      });
      
      // Send SMS notification
      await sendSMS('🎉 HIRE ALERT! Someone just clicked "Hire The Legend" on your portfolio! A potential client wants your legendary skills! 🚀💎');
      
      // Show celebration modal
      setShowCelebration(true);
      
      // Auto-hide after 5 seconds
      setTimeout(() => {
        setShowCelebration(false);
      }, 5000);
      
    } catch (error) {
      console.error('Error sending hire notification:', error);
    } finally {
      setIsHiring(false);
    }
  };

  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="fade-in-left stagger-1">Hi, I'm <br/><span className="gradient-text">FIDEL OTIENO MARTINS</span></h1>
        
        <h2 className="fade-in-left stagger-2">🚀 Full-Stack Developer 💻</h2>
        
        <p className="fade-in-left stagger-3">
          Passionate about creating exceptional digital experiences through clean code and innovative solutions. 
          I specialize in modern web technologies and love turning ideas into reality.
        </p>
        
        <div className="fade-in-up stagger-4" style={{marginTop: '2rem'}}>
          <button 
            className="btn-primary pulse"
            onClick={handleHireClick}
            disabled={isHiring}
            style={{marginRight: '1rem'}}
          >
            {isHiring ? '🚀 Sending...' : '🎯 Hire Me'}
          </button>
          <a 
            href="#contact" 
            className="btn-secondary"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Get In Touch
          </a>
        </div>
        
        <div className="fade-in-up stagger-5" style={{marginTop: '2rem'}}>
          <RotatingTechIcons />
        </div>
      </div>

      <div className="fade-in-right stagger-3">
        <img 
          src="/open.jpeg" 
          alt="FIDEL OTIENO MARTINS" 
          className="profile-image float"
          onError={(e) => {
            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjM2I4MmY2Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMjAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0cHgiPkhFczwvdGV4dD4KPC9zdmc+';
          }}
        />
      </div>

      {/* Celebration Modal */}
      {showCelebration && (
        <div 
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{
            background: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(5px)'
          }}
        >
          <div 
            className="p-8 rounded-3xl text-center max-w-md mx-4 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #f97316 0%, #fbbf24 50%, #f59e0b 100%)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
            }}
          >
            {/* Floating flowers */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-2 left-4 text-2xl animate-bounce" style={{animationDelay: '0s'}}>🌸</div>
              <div className="absolute top-8 right-6 text-3xl animate-bounce" style={{animationDelay: '0.5s'}}>🌺</div>
              <div className="absolute bottom-12 left-8 text-2xl animate-bounce" style={{animationDelay: '1s'}}>🌻</div>
              <div className="absolute bottom-6 right-4 text-3xl animate-bounce" style={{animationDelay: '1.5s'}}>🌷</div>
              <div className="absolute top-16 left-1/2 text-2xl animate-bounce" style={{animationDelay: '2s'}}>🌹</div>
            </div>
            
            {/* Profile image placeholder */}
            <div 
              className="w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center text-6xl animate-pulse"
              style={{
                background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)'
              }}
            >
              👨‍💻
            </div>
            
            <h2 className="text-3xl font-bold text-black mb-4">🎉 LEGENDARY CHOICE! 🎉</h2>
            <p className="text-lg text-black font-semibold mb-4">
              You've just made the BEST decision! 🚀
            </p>
            <p className="text-black mb-6">
              FIDEL has been notified and will contact you soon to discuss your project! 💎⚡
            </p>
            
            <div className="flex justify-center gap-2 text-3xl animate-pulse">
              <span>🎊</span>
              <span>🎉</span>
              <span>🏆</span>
              <span>⭐</span>
              <span>🔥</span>
            </div>
            
            <button 
              onClick={() => setShowCelebration(false)}
              className="mt-6 px-6 py-2 rounded-full font-bold transition-colors"
              style={{
                background: 'black',
                color: '#fbbf24',
                border: 'none'
              }}
            >
              ✨ Awesome! ✨
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
