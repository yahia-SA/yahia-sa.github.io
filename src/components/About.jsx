import React, { useEffect, useState } from 'react';
import translations from '../data/translations';

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
    { label: t.about.details.age, value: '25' },
    { label: t.about.details.experience, value: '1+ ' + t.about.details.years },
    { label: t.about.details.email, value: 'yahiasamir70@example.com' },
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
          <div className={`${language === 'ar' ? 'order-2' : 'order-1'}`}>
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
                  <span className={`font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                    {detail.value}
                  </span>
                </div>
              ))}
            </div>
            
            <a 
              href="#contact" 
              className={`inline-block mt-8 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                darkMode 
                ? 'bg-primary-dark text-white hover:bg-primary-dark/80' 
                : 'bg-primary-light text-white hover:bg-primary-light/90'
              } hover:-translate-y-1`}
            >
              {t.about.contactBtn}
            </a>
          </div>
          
          <div className={`${language === 'ar' ? 'order-1' : 'order-2'} flex justify-center`}>
            <div className={`relative rounded-lg overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <div className={`w-full h-full absolute -inset-1 ${darkMode ? 'bg-gradient-to-tr from-primary-dark/30 to-secondary-dark/30' : 'bg-gradient-to-tr from-primary-light/20 to-secondary-light/20'} filter blur-xl opacity-70 transform -rotate-6`}></div>
              <div className="relative p-1">
                <img 
                src='https://scontent.fcai19-8.fna.fbcdn.net/v/t39.30808-6/465578983_3201922629950047_2443436061176819499_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGbsRlYR99FVkoRTxLhLUZjNhcc9iCPuC02Fxz2II-4LfHDdxaVX-i15rf0H_AUZTCkt1E8nJ_U69nMZHRBMvtf&_nc_ohc=4kuKOC0IK8kQ7kNvwG5eOu_&_nc_oc=AdkyUuqx9AhQAp7hmOkUgZGfWL4Qj1F8zudYFsm0qKgTSnWoDdSJp2ldx128jHSQTd0&_nc_zt=23&_nc_ht=scontent.fcai19-8.fna&_nc_gid=HUbxBf6eorQPiykfQT_SrQ&oh=00_AfEakPdPlYKmnfim0EMME1aDPXWfE4dS9PpOaNb5u8BKFg&oe=68134FA9'
                  alt="About Me" 
                  className="w-full h-auto rounded-lg"
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