import React, { useState, useEffect } from 'react';
import translations from '../data/translations';

const Skills = ({ darkMode, language }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState([]);
  const t = translations[language];
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('skills');
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
          setIsVisible(true);
          
          // Animate skills one by one
          const timeout = setTimeout(() => {
            const allSkills = [
              ...t.skills.technical,
              ...t.skills.professional,
              ...t.skills.languages
            ];
            
            allSkills.forEach((skill, index) => {
              setTimeout(() => {
                setAnimatedSkills(prev => [...prev, skill.name]);
              }, index * 100);
            });
          }, 500);
          
          return () => clearTimeout(timeout);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [t.skills.technical, t.skills.professional, t.skills.languages]);
  
  return (
    <section 
      id="skills" 
      className={`py-20 px-4 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="container mx-auto">
        <div className={`text-center mb-16 section-transition ${isVisible ? 'visible' : 'hidden'}`}>
          <h2 className={`inline-block text-3xl font-bold border-b-4 pb-2 ${darkMode ? 'border-primary-dark text-white' : 'border-primary-light text-gray-900'}`}>
            {t.skills.title}
          </h2>
          <p className={`mt-4 max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {t.skills.subtitle}
          </p>
        </div>
        
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-10 section-transition ${isVisible ? 'visible' : 'hidden'}`}>
          <SkillCategory 
            title={t.skills.technicalTitle}
            skills={t.skills.technical}
            animatedSkills={animatedSkills}
            darkMode={darkMode}
          />
          
          <SkillCategory 
            title={t.skills.professionalTitle}
            skills={t.skills.professional}
            animatedSkills={animatedSkills}
            darkMode={darkMode}
          />
          
          <SkillCategory 
            title={t.skills.languagesTitle}
            skills={t.skills.languages}
            animatedSkills={animatedSkills}
            darkMode={darkMode}
          />
        </div>
      </div>
    </section>
  );
};

const SkillCategory = ({ title, skills, animatedSkills, darkMode }) => {
  return (
    <div className={`rounded-xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} ${darkMode ? 'shadow-custom-dark' : 'shadow-custom-light'}`}>
      <h3 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h3>
      
      <div className="space-y-5">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-1">
            <div className="flex justify-between">
              <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {skill.name}
              </span>
              <span className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                {skill.level}%
              </span>
            </div>
            
            <div className={`skill-bar ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <div 
                className={`skill-progress ${
                  darkMode 
                  ? 'bg-gradient-to-r from-primary-dark to-secondary-dark' 
                  : 'bg-gradient-to-r from-primary-light to-secondary-light'
                }`}
                style={{ 
                  width: animatedSkills.includes(skill.name) ? `${skill.level}%` : '0%'
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;