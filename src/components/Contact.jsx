import React, { useState, useEffect } from 'react';
import { MailIcon, LinkedInIcon, GithubIcon } from './Icons';
import translations from '../data/translations';
import emailjs from 'emailjs-com';

const Contact = ({ darkMode, language }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const t = translations[language];
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('contact');
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
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = t.contact.form.nameError;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = t.contact.form.emailRequiredError;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = t.contact.form.emailInvalidError;
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = t.contact.form.subjectError;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = t.contact.form.messageError;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      // إرسال النموذج عبر EmailJS
      emailjs.sendForm('service_58cy0hc', 'template_rpdywqc', e.target, 'ESmPJyN0l2JTeTPVR')
        .then((result) => {
          console.log(result.text);
          setIsSubmitting(false);
          setSubmitSuccess(true);
  
          // إعادة تعيين النموذج بعد إرسال البريد بنجاح
          setTimeout(() => {
            setFormData({
              name: '',
              email: '',
              subject: '',
              message: '',
            });
            setSubmitSuccess(false);
          }, 3000);
        }, (error) => {
          console.log(error.text);
          setIsSubmitting(false);
        });
    }
  };
  
  return (
    <section 
      id="contact" 
      className={`py-20 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
      <div className="container mx-auto">
        <div className={`text-center mb-16 section-transition ${isVisible ? 'visible' : 'hidden'}`}>
          <h2 className={`inline-block text-3xl font-bold border-b-4 pb-2 ${darkMode ? 'border-primary-dark text-white' : 'border-primary-light text-gray-900'}`}>
            {t.contact.title}
          </h2>
          <p className={`mt-4 max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {t.contact.subtitle}
          </p>
        </div>
        
        <div className={`grid md:grid-cols-2 gap-10 section-transition ${isVisible ? 'visible' : 'hidden'}`}>
          <div className={language === 'ar' ? 'order-2' : 'order-1'}>
            <h3 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {t.contact.formTitle}
            </h3>
            
            {submitSuccess ? (
              <div className={`p-6 rounded-lg ${darkMode ? 'bg-green-900/20 text-green-400' : 'bg-green-100 text-green-700'}`}>
                <p className="font-medium">{t.contact.form.successMessage}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label 
                    htmlFor="name" 
                    className={`block mb-1 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    {t.contact.form.name}
                  </label>
                  <input 
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg outline-none transition-colors duration-300 ${
                      darkMode 
                      ? 'bg-gray-700 text-white border border-gray-600 focus:border-primary-dark' 
                      : 'bg-gray-100 text-gray-900 border border-gray-300 focus:border-primary-light'
                    } ${errors.name ? (darkMode ? 'border-red-500' : 'border-red-500') : ''}`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>
                
                <div>
                  <label 
                    htmlFor="email" 
                    className={`block mb-1 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    {t.contact.form.email}
                  </label>
                  <input 
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg outline-none transition-colors duration-300 ${
                      darkMode 
                      ? 'bg-gray-700 text-white border border-gray-600 focus:border-primary-dark' 
                      : 'bg-gray-100 text-gray-900 border border-gray-300 focus:border-primary-light'
                    } ${errors.email ? (darkMode ? 'border-red-500' : 'border-red-500') : ''}`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
                
                <div>
                  <label 
                    htmlFor="subject" 
                    className={`block mb-1 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    {t.contact.form.subject}
                  </label>
                  <input 
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg outline-none transition-colors duration-300 ${
                      darkMode 
                      ? 'bg-gray-700 text-white border border-gray-600 focus:border-primary-dark' 
                      : 'bg-gray-100 text-gray-900 border border-gray-300 focus:border-primary-light'
                    } ${errors.subject ? (darkMode ? 'border-red-500' : 'border-red-500') : ''}`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                  )}
                </div>
                
                <div>
                  <label 
                    htmlFor="message" 
                    className={`block mb-1 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    {t.contact.form.message}
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={`w-full px-4 py-2 rounded-lg outline-none transition-colors duration-300 ${
                      darkMode 
                      ? 'bg-gray-700 text-white border border-gray-600 focus:border-primary-dark' 
                      : 'bg-gray-100 text-gray-900 border border-gray-300 focus:border-primary-light'
                    } ${errors.message ? (darkMode ? 'border-red-500' : 'border-red-500') : ''}`}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    darkMode 
                    ? 'bg-primary-dark text-white hover:bg-primary-dark/80' 
                    : 'bg-primary-light text-white hover:bg-primary-light/90'
                  } hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none`}
                >
                  {isSubmitting ? t.contact.form.sending : t.contact.form.send}
                </button>
              </form>
            )}
          </div>
          
          <div className={language === 'ar' ? 'order-1' : 'order-2'}>
            <h3 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {t.contact.getInTouchTitle}
            </h3>
            
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {t.contact.getInTouchText}
              </p>
              
              <div className="space-y-4">
                <a 
                  href="mailto:yahiasamir70@gmail.com" 
                  className={`flex items-center gap-3 p-3 rounded-lg transition-colors duration-300 ${
                    darkMode 
                    ? 'text-gray-300 hover:bg-gray-600' 
                    : 'text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <div className={`p-2 rounded-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>
                    <MailIcon className="w-6 h-6" />
                  </div>
                  <span>yahiasamir70@gmail.com</span>
                </a>
                
                <a 
                  href="https://linkedin.com/in/yahia-sa" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`flex items-center gap-3 p-3 rounded-lg transition-colors duration-300 ${
                    darkMode 
                    ? 'text-gray-300 hover:bg-gray-600' 
                    : 'text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <div className={`p-2 rounded-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>
                    <LinkedInIcon className="w-6 h-6" />
                  </div>
                  <span>linkedin.com/in/yahia-sa</span>
                </a>
                
                <a 
                  href="https://github.com/yahia-sa" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`flex items-center gap-3 p-3 rounded-lg transition-colors duration-300 ${
                    darkMode 
                    ? 'text-gray-300 hover:bg-gray-600' 
                    : 'text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <div className={`p-2 rounded-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>
                    <GithubIcon className="w-6 h-6" />
                  </div>
                  <span>github.com/yahia-sa</span>
                </a>
              </div>
            </div>
            
            <div className={`mt-6 p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <h4 className={`font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {t.contact.availabilityTitle}
              </h4>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {t.contact.availabilityText}
              </p>
              <div className="mt-4">
                <a 
                  href="#projects" 
                  className={`inline-block px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                    darkMode 
                    ? 'bg-transparent border border-primary-dark text-primary-dark hover:bg-primary-dark hover:text-white' 
                    : 'bg-transparent border border-primary-light text-primary-light hover:bg-primary-light hover:text-white'
                  }`}
                >
                  {t.contact.viewPortfolioBtn}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;