import React, { useEffect, useState } from 'react';
import { ChevronDownIcon } from './Icons';
import translations from '../data/translations';
import profileimage from '/src/assets/profile.jpg';
import { scrollToSection } from '../utils/scrollToSection';

const Hero = ({ darkMode, language }) => {
  const [isVisible, setIsVisible] = useState(false);
  const t = translations[language];
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timeout);
  }, []);

  const handleResumeClick = () => {
    window.open('https://drive.google.com/file/d/1AMNaJSMHUVTpsJt6cnMeNH7CvQkpmD3y/view', '_blank');
  };

  return (
    <section 
      id="home"
      className={`min-h-screen flex items-center justify-center px-4 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-gray-50 to-blue-50'}`}
    >
      <div className={`container mx-auto grid md:grid-cols-2 gap-12 items-center section-transition ${isVisible ? 'visible' : 'hidden'}`}>
         <div className="order-2 fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className={`text-xl font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {t.hero.greeting}
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold my-4">
            <span>{t.hero.name}</span>
            <span className={`block mt-2 ${darkMode ? 'text-primary-dark' : 'text-primary-light'}`}>
              {t.hero.title}
            </span>
          </h1>
          <p className={`text-lg my-6 max-w-xl ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {t.hero.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
              className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                darkMode 
                ? 'bg-primary-dark text-white hover:bg-primary-dark/80' 
                : 'bg-primary-light text-white hover:bg-primary-light/90'
              } hover:-translate-y-1`}
            >
              {t.hero.contactBtn}
            </a>
            <a 
              href="#projects" 
              onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
              className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                darkMode 
                ? 'bg-transparent border border-gray-600 text-gray-300 hover:border-gray-400' 
                : 'bg-transparent border border-gray-300 text-gray-700 hover:border-gray-500'
              } hover:-translate-y-1`}
            >
              {t.hero.projectsBtn}
            </a>
            <button
              onClick={handleResumeClick}
              className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                darkMode 
                ? 'bg-secondary-dark text-white hover:bg-secondary-dark/80' 
                : 'bg-secondary-light text-white hover:bg-secondary-light/90'
              } hover:-translate-y-1`}
            >
              {t.hero.resumeBtn}
            </button>
          </div>
        </div>
        
        <div className="order-1 flex justify-center fade-in" style={{ animationDelay: '0.5s' }}>
          <div className={`relative overflow-hidden rounded-full w-80 h-80 p-2 ${darkMode ? 'bg-gradient-to-tr from-primary-dark to-secondary-dark' : 'bg-gradient-to-tr from-primary-light to-secondary-light'} float-animation`}>
            <img 
              src={profileimage}
              alt="Profile" 
              className="w-full h-full object-cover rounded-full profile-image"
            />
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
        className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full transition-colors duration-300 hover:-translate-y-1 ${
          darkMode 
          ? 'bg-gray-800 text-white hover:bg-gray-700' 
          : 'bg-white text-gray-800 hover:bg-gray-100'
        }`}
        style={{ boxShadow: darkMode ? '0 0 20px rgba(255, 255, 255, 0.1)' : '0 0 20px rgba(0, 0, 0, 0.1)' }}
      >
        <ChevronDownIcon className="w-6 h-6 animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;