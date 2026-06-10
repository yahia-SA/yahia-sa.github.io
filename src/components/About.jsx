import React, { useEffect, useState } from 'react';
import profileimage from '/src/assets/profile.jpg';
import translations from '../data/translations';
import { scrollToSection } from '../utils/scrollToSection';

const About = ({ darkMode, language }) => {
  const [isVisible, setIsVisible] = useState(false);
  const t = translations[language];
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('about');
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const personalDetails = [
    { label: t.about.details.age, value: '26' },
    { label: t.about.details.experience, value: '2+ ' + t.about.details.years },
    { label: t.about.details.email, value: 'yahiasamir70@gmail.com' },
    { label: t.about.details.location, value: t.about.details.locationValue },
    { label: t.about.details.languages, value: t.about.details.languagesValue },
    { label: t.about.details.availability, value: t.about.details.availabilityValue },
  ];

  return (
    <section 
      id="about" 
      className={`py-20 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
      <div className="container mx-auto">
        <div className={`text-center mb-16 section-transition ${isVisible ? 'visible' : 'hidden'}`}>
          <h2 className={`inline-block text-3xl font-bold border-b-4 pb-2 ${darkMode ? 'border-primary-dark text-white' : 'border-primary-light text-gray-900'}`}>
            {t.about.title}
          </h2>
        </div>
        
        <div className={`grid md:grid-cols-2 gap-12 items-center section-transition ${isVisible ? 'visible' : 'hidden'}`}>
  <div className="order-2">
    <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
      {t.about.subtitle}
    </h3>

    <div className="space-y-4">
      {t.about.paragraphs.map((paragraph, index) => (
        <p key={index} className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          {paragraph}
        </p>
      ))}
    </div>

    <div className="mt-8 grid grid-cols-2 gap-4">
      {personalDetails.map((detail, index) => (
        <div key={index} className="flex flex-col">
          <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            {detail.label}:
          </span>
          <span className={`font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'} break-words`}>
            {detail.value}
          </span>
        </div>
      ))}
    </div>

    <a 
      href="#contact" 
      onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
      className={`inline-block mt-8 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
        darkMode 
        ? 'bg-primary-dark text-white hover:bg-primary-dark/80' 
        : 'bg-primary-light text-white hover:bg-primary-light/90'
      } hover:-translate-y-1`}
    >
      {t.about.contactBtn}
    </a>
  </div>          
          <div className="order-1 flex justify-center">
            <div
              className={`relative w-full max-w-md aspect-[3/4] rounded-lg overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}
            >
              <div className={`w-full h-full absolute -inset-1 ${darkMode ? 'bg-gradient-to-tr from-primary-dark/30 to-secondary-dark/30' : 'bg-gradient-to-tr from-primary-light/20 to-secondary-light/20'} filter blur-xl opacity-70 transform -rotate-6`}></div>
              <div className="relative h-full p-1">
                <img
                  src={profileimage}
                  alt="About Me"
                  className="h-full w-full rounded-lg object-cover"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;