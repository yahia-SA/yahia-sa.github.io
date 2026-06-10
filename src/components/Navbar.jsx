import React, { useEffect, useState } from 'react';
import { MenuIcon, CloseIcon, SunIcon, MoonIcon, GlobeIcon } from './Icons';
import translations from '../data/translations';
import { scrollToSection } from '../utils/scrollToSection';

const iconBtnClass = (darkMode) =>
  `inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full touch-manipulation transition-all duration-300 ${
    darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'
  }`;

const langBtnClass = (darkMode) =>
  `inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full touch-manipulation transition-all duration-300 ${
    darkMode ? 'bg-gray-700 text-blue-300' : 'bg-gray-200 text-blue-700'
  }`;

const Navbar = ({ darkMode, language, menuOpen, toggleMenu, toggleDarkMode, toggleLanguage }) => {
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

  const desktopNavLinkClass = darkMode
    ? 'text-gray-200 hover:text-primary-dark'
    : 'text-gray-700 hover:text-primary-light';
  const mobileNavLinkClass = darkMode
    ? 'text-gray-100 hover:text-primary-dark'
    : 'text-gray-800 hover:text-primary-light';

  const onNavClick = (e, sectionId) => {
    e.preventDefault();
    if (menuOpen) {
      toggleMenu();
      window.setTimeout(() => scrollToSection(sectionId), 180);
    } else {
      scrollToSection(sectionId);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 pt-[env(safe-area-inset-top,0px)] ${
        scrolled
          ? darkMode
            ? 'bg-gray-900/95 shadow-custom-dark'
            : 'bg-white/95 shadow-custom-light'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-2 sm:gap-4 sm:px-4 sm:py-3">
        <a
          href="#home"
          onClick={(e) => onNavClick(e, 'home')}
          className={`min-w-0 shrink truncate text-lg font-bold transition-colors duration-300 sm:text-xl md:text-2xl ${
            darkMode ? 'text-primary-dark' : 'text-primary-light'
          }`}
        >
          {language === 'en' ? 'Portfolio' : 'معرض أعمالي'}
        </a>

        {/* Desktop: centered nav */}
        <nav className="hidden min-w-0 flex-1 justify-center md:flex">
          <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 lg:gap-x-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => onNavClick(e, item.id)}
                  className={`whitespace-nowrap text-sm font-medium transition-colors duration-300 lg:text-base ${desktopNavLinkClass}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Theme + language + menu: same row on all breakpoints (adaptive) */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            onClick={toggleDarkMode}
            className={iconBtnClass(darkMode)}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
          </button>

          <button
            type="button"
            onClick={toggleLanguage}
            className={langBtnClass(darkMode)}
            aria-label={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
          >
            <GlobeIcon className="h-6 w-6" />
          </button>

          <button
            type="button"
            className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full touch-manipulation transition-colors duration-300 md:hidden ${
              darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-900'
            }`}
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile overlay menu */}
      <div
        className={`mobile-menu fixed inset-x-0 bottom-0 z-30 overflow-y-auto bg-opacity-95 transition-all duration-200 md:hidden ${
          darkMode ? 'bg-gray-900' : 'bg-white'
        } ${menuOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none invisible translate-y-2 opacity-0'}`}
        style={{
          top: 'calc(5rem + env(safe-area-inset-top, 0px))',
        }}
        aria-hidden={!menuOpen}
      >
        <nav className="px-4 py-6">
          <ul className="flex flex-col items-center space-y-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`text-lg font-medium transition-colors duration-300 sm:text-xl ${mobileNavLinkClass}`}
                  onClick={(e) => onNavClick(e, item.id)}
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
