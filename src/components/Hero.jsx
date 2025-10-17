import React, { useState } from 'react';

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
          phone: '+254774071641', // Your actual phone number
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
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="max-w-6xl mx-auto px-4 z-10 text-center">
        <div className="slide-in-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-yellow-400">FIDEL OTIENO</span>
          </h1>
          
          <h2 className="text-xl md:text-3xl text-orange-400 mb-8 font-bold">
            🚀Full-Stack Engineer 💻
          </h2>
          
          <p className="text-lg text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
            Master of digital realms, architect of cyber solutions. I craft legendary web applications 
            with cutting-edge technologies, turning code into digital magic. 🔥⚡
          </p>
          
          <div className="mb-12">
            <button 
              className="btn-cyber"
              onClick={handleHireClick}
              disabled={isHiring}
            >
              {isHiring ? '🚀 Sending...' : '🎯 Hire The Legend'}
            </button>
          </div>
          
          <div className="flex justify-center gap-6 text-3xl">
            <div className="rotating-icon text-yellow-400">⚡</div>
            <div className="rotating-icon text-orange-400" style={{animationDelay: '0.5s'}}>🔥</div>
            <div className="rotating-icon text-green-400" style={{animationDelay: '1s'}}>💎</div>
            <div className="rotating-icon text-blue-400" style={{animationDelay: '1.5s'}}>🚀</div>
          </div>
        </div>

        {/* Celebration Modal */}
        {showCelebration && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 p-8 rounded-3xl text-center max-w-md mx-4 relative overflow-hidden">
              {/* Floating flowers */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-2 left-4 text-2xl animate-bounce" style={{animationDelay: '0s'}}>🌸</div>
                <div className="absolute top-8 right-6 text-3xl animate-bounce" style={{animationDelay: '0.5s'}}>🌺</div>
                <div className="absolute bottom-12 left-8 text-2xl animate-bounce" style={{animationDelay: '1s'}}>🌻</div>
                <div className="absolute bottom-6 right-4 text-3xl animate-bounce" style={{animationDelay: '1.5s'}}>🌷</div>
                <div className="absolute top-16 left-1/2 text-2xl animate-bounce" style={{animationDelay: '2s'}}>🌹</div>
              </div>
              
              {/* Your picture */}
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-6xl animate-pulse">
                🦁
              </div>
              
              <h2 className="text-3xl font-bold text-black mb-4">🎉 LEGENDARY CHOICE! 🎉</h2>
              <p className="text-lg text-black font-semibold mb-4">
                You've just made the BEST decision! 🚀
              </p>
              <p className="text-black mb-6">
                The Legend has been notified and will contact you soon to discuss your epic project! 💎⚡
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
                className="mt-6 bg-black text-yellow-400 px-6 py-2 rounded-full font-bold hover:bg-gray-800 transition-colors"
              >
                ✨ Awesome! ✨
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
