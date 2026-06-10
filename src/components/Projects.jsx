import React, { useState, useEffect } from 'react';
import { GithubIcon, ExternalLinkIcon, GooglePlayIcon, AppStoreIcon } from './Icons';
import translations from '../data/translations';

function resolveProjectLinks(project) {
  const { googlePlayUrl, appStoreUrl, liveUrl, githubUrl } = project;

  const googlePlay =
    googlePlayUrl ||
    (liveUrl?.includes('play.google.com') ? liveUrl : null);

  const appStore =
    appStoreUrl ||
    (liveUrl?.includes('apps.apple.com') || liveUrl?.includes('itunes.apple.com')
      ? liveUrl
      : null);

  const githubLink = githubUrl?.includes('github.com') ? githubUrl : null;

  const isStore = (u) =>
    u &&
    (u.includes('play.google.com') ||
      u.includes('apps.apple.com') ||
      u.includes('itunes.apple.com'));

  let webLink = null;
  if (githubUrl && !githubUrl.includes('github.com')) webLink = githubUrl;
  else if (liveUrl && !isStore(liveUrl) && !liveUrl.includes('github.com'))
    webLink = liveUrl;

  return { googlePlay, appStore, githubLink, webLink };
}

const Projects = ({ darkMode, language }) => {
  const [isVisible, setIsVisible] = useState(false);
  const t = translations[language];
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('projects');
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
  
  return (
    <section 
      id="projects" 
      className={`py-20 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
      <div className="container mx-auto">
        <div className={`text-center mb-16 section-transition ${isVisible ? 'visible' : 'hidden'}`}>
          <h2 className={`inline-block text-3xl font-bold border-b-4 pb-2 ${darkMode ? 'border-primary-dark text-white' : 'border-primary-light text-gray-900'}`}>
            {t.projects.title}
          </h2>
          <p className={`mt-4 max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {t.projects.subtitle}
          </p>
        </div>
        
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 section-transition ${isVisible ? 'visible' : 'hidden'}`}>
          {t.projects.items.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              darkMode={darkMode}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, darkMode, delay }) => {
  const { title, description, image, technologies } = project;
  const { googlePlay, appStore, githubLink, webLink } = resolveProjectLinks(project);

  const storeBtnClass = `inline-flex items-center justify-center rounded-lg border-2 transition-colors duration-300 ${
    darkMode
      ? 'border-gray-500 text-gray-200 hover:bg-gray-600 hover:border-gray-400'
      : 'border-gray-300 text-gray-800 hover:bg-gray-200 hover:border-gray-400'
  }`;

  const primaryBtnClass = `inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-300 ${
    darkMode
      ? 'bg-primary-dark text-white hover:bg-primary-dark/80'
      : 'bg-primary-light text-white hover:bg-primary-light/90'
  }`;

  const showGithub = Boolean(githubLink);
  const showWeb = Boolean(webLink);

  return (
    <div 
      className={`rounded-xl overflow-hidden hover-scale ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} fade-in`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      
      <div className="p-6">
        <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          {title}
        </h3>
        
        <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className={`px-3 py-1 rounded-full text-xs ${
                darkMode 
                ? 'bg-gray-600 text-gray-200' 
                : 'bg-gray-200 text-gray-800'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-3 items-center">
          {googlePlay && (
            <a
              href={googlePlay}
              target="_blank"
              rel="noopener noreferrer"
              className={`${storeBtnClass} p-2.5`}
              aria-label="Get it on Google Play"
              title="Google Play"
            >
              <GooglePlayIcon className="h-8 w-8 text-[#00A173]" />
            </a>
          )}
          {appStore && (
            <a
              href={appStore}
              target="_blank"
              rel="noopener noreferrer"
              className={`${storeBtnClass} p-2.5`}
              aria-label="Download on the App Store"
              title="App Store"
            >
              <AppStoreIcon className="h-8 w-8" />
            </a>
          )}
          {showGithub && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={primaryBtnClass}
            >
              <span>View source</span>
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
          {showWeb && (
            <a
              href={webLink}
              target="_blank"
              rel="noopener noreferrer"
              className={primaryBtnClass}
            >
              <span>Visit site</span>
              <ExternalLinkIcon className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;