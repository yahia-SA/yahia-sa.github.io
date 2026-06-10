import React, { useState, useEffect } from 'react';
import { scrollToSection } from './utils/scrollToSection';
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

  // After deploy: hash URL scrolls once layout/fonts are ready
  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, '');
    if (!hash) return;
    const id = window.setTimeout(() => scrollToSection(hash), 280);
    return () => clearTimeout(id);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    document.documentElement.classList.toggle('dark', newDarkMode);
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
      <Navbar 
        darkMode={darkMode} 
        language={language} 
        menuOpen={menuOpen} 
        toggleMenu={toggleMenu} 
        toggleDarkMode={toggleDarkMode}
        toggleLanguage={toggleLanguage}
      />
      
      <main className="pt-[calc(5rem+env(safe-area-inset-top,0px))]">
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