import React, { useState, useEffect } from 'react';

const TypingWelcome = () => {
  const messages = [
    "Welcome to Fidel's Portfolio! 👋",
    "Explore my projects and skills 🚀",
    "Full-Stack Developer at your service ✨",
    "Let's build something amazing together! 💡",
    "Fresh graduate, endless possibilities! 🎨"
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentMessage = messages[currentMessageIndex];
    
    if (isTyping) {
      if (charIndex < currentMessage.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentMessage.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentMessage.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
        setIsTyping(true);
      }
    }
  }, [charIndex, isTyping, currentMessageIndex, messages]);

  return (
    <div className="typing-welcome">
      <div className="typing-container">
        <span className="pen-icon">✍️</span>
        <span className="typing-text">{currentText}</span>
        <span className="cursor">|</span>
      </div>
    </div>
  );
};

export default TypingWelcome;