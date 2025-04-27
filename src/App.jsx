import React, { useState, useEffect } from 'react';
import { SunIcon, MoonIcon, GlobeIcon } from './components/Icons';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en'); // 'en' for English, 'ar' for Arabic
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Check local storage for dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    const savedLanguage = localStorage.getItem('language') || 'en';
    
    setDarkMode(savedDarkMode);
    setLanguage(savedLanguage);
    
    // Apply the appropriate class to the body
    if (savedDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Set direction based on language
    document.body.className = savedLanguage === 'ar' ? 'rtl' : 'ltr';
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ar' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
    document.body.className = newLanguage === 'ar' ? 'rtl' : 'ltr';
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <div className="fixed top-4 right-4 z-50 flex items-center space-x-4">
        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'} transition-all duration-300`}
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
        </button>
        
        <button
          onClick={toggleLanguage}
          className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-blue-300' : 'bg-gray-200 text-blue-700'} transition-all duration-300`}
          aria-label={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
        >
          <GlobeIcon className="w-6 h-6" />
        </button>
      </div>
      
      <Navbar 
        darkMode={darkMode} 
        language={language} 
        menuOpen={menuOpen} 
        toggleMenu={toggleMenu} 
      />
      
      <main>
        <Hero darkMode={darkMode} language={language} />
        <About darkMode={darkMode} language={language} />
        <Experience darkMode={darkMode} language={language} />
        <Projects darkMode={darkMode} language={language} />
        <Skills darkMode={darkMode} language={language} />
        <Contact darkMode={darkMode} language={language} />
      </main>
      
      <Footer darkMode={darkMode} language={language} />
    </div>
  );
}

export default App;