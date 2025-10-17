import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
          key: 'textbelt' // Free tier key
        })
      });
    } catch (error) {
      console.error('SMS error:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send email via Formspree
      const response = await fetch('https://formspree.io/f/xkgqybzj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: formData.email,
          _subject: `Portfolio Contact from ${formData.name}`
        })
      });
      
      // Send SMS notification
      await sendSMS(`📧 NEW CONTACT MESSAGE! From: ${formData.name} (${formData.email}). Message: ${formData.message.substring(0, 100)}...`);
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="fade-in-up">
        <h2 className="text-center mb-16">🚀 Contact The Legend</h2>
        <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Ready to collaborate with a digital warrior? Let's create something legendary together! 💎⚡
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="card slide-in-left">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center">
                <span className="rotating-icon mr-3">🦁</span>
                Connect With The Beast
              </h3>
              <p className="text-gray-300 mb-6">
                Ready to join forces? Drop me a message and let's build the future together! 🔥
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center group">
                <div className="w-3 h-3 text-yellow-400 mr-3 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">
                  📧
                </div>
                <a href="mailto:fidelmartins05@gmail.com" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  fidelmartins05@gmail.com
                </a>
              </div>

              <div className="flex items-center group">
                <div className="w-3 h-3 text-orange-400 mr-3 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">
                  📍
                </div>
                <span className="text-gray-300">Nairobi, Kenya</span>
              </div>
            </div>

            <div className="flex space-x-6 mt-8">
              <a href="https://github.com/fidel-otieno2" className="group">
                <div className="w-4 h-4 text-green-400 transition-all duration-300 group-hover:scale-150 group-hover:rotate-180 group-hover:text-yellow-400">
                  💻
                </div>
              </a>
              <a href="https://www.linkedin.com/in/fidel-otieno-475604379/" className="group">
                <div className="w-4 h-4 text-blue-400 transition-all duration-300 group-hover:scale-150 group-hover:rotate-180 group-hover:text-orange-400">
                  🔗
                </div>
              </a>
              <a href="https://twitter.com" className="group">
                <div className="w-4 h-4 text-cyan-400 transition-all duration-300 group-hover:scale-150 group-hover:rotate-180 group-hover:text-red-400">
                  🐦
                </div>
              </a>
              <a href="https://www.instagram.com/cold_icedveins_8/" className="group">
                <div className="w-4 h-4 text-pink-400 transition-all duration-300 group-hover:scale-150 group-hover:rotate-180 group-hover:text-purple-400">
                  📸
                </div>
              </a>
            </div>
          </div>

          <div className="card slide-in-right">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-yellow-400 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border-2 border-yellow-400 rounded-lg text-white focus:border-orange-400 focus:outline-none transition-all duration-300"
                  placeholder="Your legendary name..."
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-yellow-400 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border-2 border-yellow-400 rounded-lg text-white focus:border-orange-400 focus:outline-none transition-all duration-300"
                  placeholder="your.email@domain.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-yellow-400 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-black border-2 border-yellow-400 rounded-lg text-white focus:border-orange-400 focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Tell me about your epic project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-cyber w-full"
              >
                {isSubmitting ? '🚀 Sending...' : '⚡ Send Message'}
              </button>

              {submitStatus === 'success' && (
                <p className="text-green-400 text-sm text-center mt-4">
                  🎉 Message sent successfully! I'll get back to you soon.
                </p>
              )}

              {submitStatus === 'error' && (
                <p className="text-red-400 text-sm text-center mt-4">
                  ❌ Failed to send message. Please try again!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;