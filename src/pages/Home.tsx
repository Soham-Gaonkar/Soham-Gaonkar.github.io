import React from 'react';

const Home: React.FC = () => (
  <main className="min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-6rem)] bg-white dark:bg-slate-900 transition-colors duration-300 flex flex-col font-sans">
    <div className="flex flex-1 items-center justify-center w-full px-4 md:px-8 py-6 md:py-10">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 place-items-center gap-8 md:gap-12">
        {/* Left: Profile Image */}
        <div className="flex flex-col items-center md:items-center w-full justify-center">
          <img
            src="/assets/profile.png"
            alt="Soham Gaonkar"
            className="w-72 h-72 sm:w-80 sm:h-80 md:w-[27rem] md:h-[27rem] rounded-2xl object-cover shadow-lg border-4 border-black dark:border-slate-200"
          />
        </div>
        {/* Right: Hero Content */}
        <div className="flex flex-col items-center md:items-start w-full text-center md:text-left justify-center max-w-xl">
          <div className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-500 dark:text-slate-300 mb-2">Hi! This is</div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black dark:text-white mb-2 leading-tight" style={{ fontFamily: 'Inter, DM Sans, sans-serif' }}>
            Soham Gaonkar
          </h1>
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700 dark:text-slate-200 mb-3" style={{ fontFamily: 'Inter, DM Sans, sans-serif' }}>
            AI Undergraduate at IIT Gandhinagar
          </div>
          <div className="text-xl sm:text-2xl md:text-3xl text-gray-500 dark:text-slate-400 mb-8 leading-relaxed" style={{ fontFamily: 'Inter, DM Sans, sans-serif' }}>
            
          </div>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-5 mb-7 w-full justify-center md:justify-start">
            <a
              href="/assets/SohamGaonkarCVmarch.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 md:px-10 py-3 md:py-4 rounded-full border-2 border-black dark:border-slate-200 text-black dark:text-slate-200 bg-transparent font-semibold text-xl md:text-2xl shadow-sm hover:bg-black hover:text-white dark:hover:bg-slate-200 dark:hover:text-slate-900 transition-all duration-300"
              style={{ fontFamily: 'Inter, DM Sans, sans-serif' }}
            >
              Download CV
            </a>
            <a
              href="mailto:soham.gaonkar@iitgn.ac.in"
              className="px-8 md:px-10 py-3 md:py-4 rounded-full bg-black text-white dark:bg-slate-200 dark:text-slate-900 font-semibold text-xl md:text-2xl shadow-sm hover:scale-105 transition-all duration-300"
              style={{ fontFamily: 'Inter, DM Sans, sans-serif' }}
            >
              Contact Me
            </a>
          </div>
          <div className="flex gap-7 md:gap-9 mt-2 justify-center md:justify-start">
            <a href="https://www.linkedin.com/in/soham-gaonkar-885426280/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-black dark:text-slate-200 hover:scale-110 transition-transform">
              <svg className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.966 0-1.75-.79-1.75-1.75s.784-1.75 1.75-1.75 1.75.79 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
            </a>
            <a href="https://github.com/Soham-Gaonkar" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-black dark:text-slate-200 hover:scale-110 transition-transform">
              <svg className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.021C22 6.484 17.523 2 12 2z"/></svg>
            </a>
            <a href="mailto:soham.gaonkar@iitgn.ac.in" aria-label="Email" className="text-black dark:text-slate-200 hover:text-red-600 transition-transform">
              <svg className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 6.81A2.25 2.25 0 0 1 4.25 5.5h15.5c.83 0 1.6.5 1.99 1.31.13.26.21.54.25.83v10.06A2.25 2.25 0 0 1 19.75 20.5H4.25A2.25 2.25 0 0 1 2 18.7V7.64c.04-.29.12-.57.25-.83zm1.72.69l8.27 6.2c.2.15.47.15.67 0l8.27-6.2a.75.75 0 0 0-.47-.19H4.25a.75.75 0 0 0-.52.19zm16.77 1.62l-6.98 5.23a2.25 2.25 0 0 1-2.72 0l-6.98-5.23V18.7c0 .41.34.75.75.75h15.5c.41 0 .75-.34.75-.75V9.12z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default Home; 