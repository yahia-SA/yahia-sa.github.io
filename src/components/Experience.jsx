import React, { useState, useEffect } from 'react';
import translations from '../data/translations';

const Experience = ({ darkMode, language }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('education');
  const t = translations[language];
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('experience');
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
  
  const education = t.experience.education;
  const work = t.experience.work;

  return (
    <section 
      id="experience" 
      className={`py-20 px-4 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="container mx-auto">
        <div className={`text-center mb-16 section-transition ${isVisible ? 'visible' : 'hidden'}`}>
          <h2 className={`inline-block text-3xl font-bold border-b-4 pb-2 ${darkMode ? 'border-primary-dark text-white' : 'border-primary-light text-gray-900'}`}>
            {t.experience.title}
          </h2>
        </div>
        
        <div className={`section-transition ${isVisible ? 'visible' : 'hidden'}`}>
          <div className="flex justify-center mb-10">
            <div className={`inline-flex p-1 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
              <button
                onClick={() => setActiveTab('education')}
                className={`px-6 py-2 rounded-md transition-all duration-300 ${
                  activeTab === 'education' 
                    ? (darkMode ? 'bg-primary-dark text-white' : 'bg-primary-light text-white') 
                    : (darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900')
                }`}
              >
                {t.experience.educationTab}
              </button>
              <button
                onClick={() => setActiveTab('work')}
                className={`px-6 py-2 rounded-md transition-all duration-300 ${
                  activeTab === 'work' 
                    ? (darkMode ? 'bg-primary-dark text-white' : 'bg-primary-light text-white') 
                    : (darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900')
                }`}
              >
                {t.experience.workTab}
              </button>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {activeTab === 'education' ? (
              <div className="space-y-8">
                {education.map((item, index) => (
                  <ExperienceItem 
                    key={index}
                    title={item.degree}
                    organization={item.institution}
                    date={item.date}
                    description={item.description}
                    darkMode={darkMode}
                    isLast={index === education.length - 1}
                  />
                ))}
              </div>
            ) : (
              <div className="space-y-8">
                {work.map((item, index) => (
                  <ExperienceItem 
                    key={index}
                    title={item.position}
                    organization={item.company}
                    date={item.date}
                    description={item.description}
                    darkMode={darkMode}
                    isLast={index === work.length - 1}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceItem = ({ title, organization, date, description, darkMode, isLast }) => {
  return (
    <div className="relative pl-8">
      {!isLast && (
        <div className={`absolute top-6 bottom-0 left-3 w-0.5 ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
      )}
      <div className={`absolute top-1 left-0 w-6 h-6 rounded-full border-2 ${darkMode ? 'border-primary-dark bg-gray-900' : 'border-primary-light bg-white'}`}></div>
      <div className="hover-scale">
        <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          {title}
        </h3>
        <div className="flex justify-between items-center mt-1 mb-3">
          <p className={`${darkMode ? 'text-primary-dark' : 'text-primary-light'} font-medium`}>
            {organization}
          </p>
          <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            {date}
          </span>
        </div>
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default Experience;