import React from 'react';
import { LinkedInIcon, GithubIcon, MailIcon } from './Icons';
import translations from '../data/translations';
import { scrollToSection } from '../utils/scrollToSection';

const Footer = ({ darkMode, language }) => {
  const t = translations[language];
  const currentYear = new Date().getFullYear();
  const footerNavLinkClass = darkMode
    ? 'text-gray-300 hover:text-primary-dark'
    : 'text-gray-600 hover:text-primary-light';

  const onFooterNav = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <footer className={`py-10 px-4 ${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a 
              href="#home" 
              onClick={(e) => onFooterNav(e, 'home')}
              className={`text-2xl font-bold transition-colors duration-300 ${darkMode ? 'text-primary-dark' : 'text-primary-light'}`}
            >
              {language === 'en' ? 'Portfolio' : 'معرض أعمالي'}
            </a>
          </div>
          
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <a 
              href="https://linkedin.com/in/yahia-sa" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-colors duration-300 ${
                darkMode 
                ? 'bg-gray-800 text-gray-300 hover:text-white' 
                : 'bg-gray-200 text-gray-700 hover:text-gray-900'
              }`}
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon className="w-5 h-5" />
            </a>
            
            <a 
              href="https://github.com/yahia-SA" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-colors duration-300 ${
                darkMode 
                ? 'bg-gray-800 text-gray-300 hover:text-white' 
                : 'bg-gray-200 text-gray-700 hover:text-gray-900'
              }`}
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            
            <a 
              href="mailto:yahiasamir70@gmail.com"
              className={`p-2 rounded-full transition-colors duration-300 ${
                darkMode 
                ? 'bg-gray-800 text-gray-300 hover:text-white' 
                : 'bg-gray-200 text-gray-700 hover:text-gray-900'
              }`}
              aria-label="Send Email"
            >
              <MailIcon className="w-5 h-5" />
            </a>
          </div>
          
          <div>
            <p className="text-sm">
              &copy; {currentYear} {t.footer.copyright}
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <nav>
            <ul className="flex flex-wrap justify-center gap-4 md:gap-8">
              <li>
                <a 
                  href="#home"
                  onClick={(e) => onFooterNav(e, 'home')}
                  className={`transition-colors duration-300 ${footerNavLinkClass}`}
                >
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a 
                  href="#about"
                  onClick={(e) => onFooterNav(e, 'about')}
                  className={`transition-colors duration-300 ${footerNavLinkClass}`}
                >
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a 
                  href="#experience"
                  onClick={(e) => onFooterNav(e, 'experience')}
                  className={`transition-colors duration-300 ${footerNavLinkClass}`}
                >
                  {t.nav.experience}
                </a>
              </li>
              <li>
                <a 
                  href="#projects"
                  onClick={(e) => onFooterNav(e, 'projects')}
                  className={`transition-colors duration-300 ${footerNavLinkClass}`}
                >
                  {t.nav.projects}
                </a>
              </li>
              <li>
                <a 
                  href="#skills"
                  onClick={(e) => onFooterNav(e, 'skills')}
                  className={`transition-colors duration-300 ${footerNavLinkClass}`}
                >
                  {t.nav.skills}
                </a>
              </li>
              <li>
                <a 
                  href="#contact"
                  onClick={(e) => onFooterNav(e, 'contact')}
                  className={`transition-colors duration-300 ${footerNavLinkClass}`}
                >
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;