import React, { useEffect, useState } from 'react';
import { MenuIcon, CloseIcon } from './Icons';
import translations from '../data/translations';

const Navbar = ({ darkMode, language, menuOpen, toggleMenu }) => {
  const [scrolled, setScrolled] = useState(false);
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'experience', label: t.nav.experience },
    { id: 'projects', label: t.nav.projects },
    { id: 'skills', label: t.nav.skills },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <header className={`fixed w-full z-30 transition-all duration-300 ${scrolled ? (darkMode ? 'bg-gray-900/95 shadow-custom-dark' : 'bg-white/95 shadow-custom-light') : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a 
          href="#home" 
          className={`text-2xl font-bold transition-colors duration-300 ${darkMode ? 'text-primary-dark' : 'text-primary-light'}`}
        >
          {language === 'en' ? 'Portfolio' : 'معرض أعمالي'}
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`}
                  className={`font-medium transition-colors duration-300 hover:text-primary-${darkMode ? 'dark' : 'light'}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden block focus:outline-none"
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? (
            <CloseIcon className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-gray-900'}`} />
          ) : (
            <MenuIcon className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-gray-900'}`} />
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`mobile-menu md:hidden fixed inset-0 z-20 bg-opacity-95 ${darkMode ? 'bg-gray-900' : 'bg-white'} ${menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} transition-all duration-300`}
        style={{ top: '60px' }}
      >
        <nav className="py-5">
          <ul className="flex flex-col items-center space-y-6 pt-10">
            {navItems.map((item) => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`}
                  className={`text-xl font-medium transition-colors duration-300 hover:text-primary-${darkMode ? 'dark' : 'light'}`}
                  onClick={toggleMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;