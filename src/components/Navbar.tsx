import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/resume', label: 'Resume' },
  { to: '/blog', label: 'Blog' },
];

const Navbar: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full h-16 md:h-24 flex items-center px-4 md:px-12 font-sans bg-transparent relative">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between w-full">
        {/* Left: Name */}
        <div className="text-2xl md:text-4xl font-medium text-black dark:text-white tracking-tight whitespace-nowrap" style={{ fontFamily: 'Inter, DM Sans, sans-serif' }}>
          Soham Gaonkar
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-lg md:text-2xl font-semibold px-4 md:px-6 py-1 transition-all duration-300 border-b-2 border-transparent
                  ${location.pathname === link.to
                    ? 'border-black dark:border-white text-black dark:text-white'
                    : 'hover:border-black hover:dark:border-white hover:text-black dark:hover:text-white text-gray-700 dark:text-gray-200'}
                `}
                style={{ fontFamily: 'Inter, DM Sans, sans-serif' }}
              >
                {link.label}
              </Link>
            ))}
          </div>
          {/* Social Icons and Dark Mode Toggle */}
          <div className="flex items-center gap-4 md:gap-6 ml-6">
            <a href="https://github.com/Soham-Gaonkar" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-black dark:text-white hover:text-gray-700 dark:hover:text-blue-400 transition text-3xl">
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.021C22 6.484 17.523 2 12 2z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/soham-gaonkar-885426280/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-black dark:text-white hover:text-gray-700 dark:hover:text-blue-400 transition text-3xl">
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.966 0-1.75-.79-1.75-1.75s.784-1.75 1.75-1.75 1.75.79 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
            </a>
            <a href="mailto:soham.gaonkar@iitgn.ac.in" className="text-black dark:text-white hover:text-red-600 transition text-3xl" aria-label="Email">
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 6.81A2.25 2.25 0 0 1 4.25 5.5h15.5c.83 0 1.6.5 1.99 1.31.13.26.21.54.25.83v10.06A2.25 2.25 0 0 1 19.75 20.5H4.25A2.25 2.25 0 0 1 2 18.7V7.64c.04-.29.12-.57.25-.83zm1.72.69l8.27 6.2c.2.15.47.15.67 0l8.27-6.2a.75.75 0 0 0-.47-.19H4.25a.75.75 0 0 0-.52.19zm16.77 1.62l-6.98 5.23a2.25 2.25 0 0 1-2.72 0l-6.98-5.23V18.7c0 .41.34.75.75.75h15.5c.41 0 .75-.34.75-.75V9.12z"/></svg>
            </a>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-black dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-black dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-200"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-black dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-zinc-900 border-t border-gray-200 dark:border-gray-700 shadow-lg z-50">
          <div className="flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-semibold px-6 py-3 transition-all duration-300 border-l-4 border-transparent
                  ${location.pathname === link.to
                    ? 'border-black dark:border-white text-black dark:text-white bg-gray-50 dark:bg-zinc-800'
                    : 'hover:border-black hover:dark:border-white hover:text-black dark:hover:text-white text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-zinc-800'}
                `}
                style={{ fontFamily: 'Inter, DM Sans, sans-serif' }}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center justify-center gap-6 px-6 py-4 border-t border-gray-200 dark:border-gray-700 mt-2">
              <a href="https://github.com/Soham-Gaonkar" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-black dark:text-white hover:text-gray-700 dark:hover:text-blue-400 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.021C22 6.484 17.523 2 12 2z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/soham-gaonkar-885426280/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-black dark:text-white hover:text-gray-700 dark:hover:text-blue-400 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.966 0-1.75-.79-1.75-1.75s.784-1.75 1.75-1.75 1.75.79 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
              </a>
              <a href="mailto:soham.gaonkar@iitgn.ac.in" className="text-black dark:text-white hover:text-red-600 transition" aria-label="Email">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 6.81A2.25 2.25 0 0 1 4.25 5.5h15.5c.83 0 1.6.5 1.99 1.31.13.26.21.54.25.83v10.06A2.25 2.25 0 0 1 19.75 20.5H4.25A2.25 2.25 0 0 1 2 18.7V7.64c.04-.29.12-.57.25-.83zm1.72.69l8.27 6.2c.2.15.47.15.67 0l8.27-6.2a.75.75 0 0 0-.47-.19H4.25a.75.75 0 0 0-.52.19zm16.77 1.62l-6.98 5.23a2.25 2.25 0 0 1-2.72 0l-6.98-5.23V18.7c0 .41.34.75.75.75h15.5c.41 0 .75-.34.75-.75V9.12z"/></svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 