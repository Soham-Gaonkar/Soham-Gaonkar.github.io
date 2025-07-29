import React from 'react';

const skills = [
  'Data Science',
  'Computer Vision',
  'Machine Learning',
  'Python',
  'React',
  'JavaScript',
];

const news = [
  {
    date: 'May 13, 2025',
    text: <span>Joined <span className="font-semibold text-orange-600">CVIG Lab</span> as a <span className="font-semibold text-orange-600">Summer Research Intern</span>.</span>,
  },
  {
    date: 'April 30, 2025',
    text: <span>Awarded <span className="font-semibold text-orange-600">2nd Prize</span> for <span className="font-semibold text-orange-600">Best Undergraduate Research Project</span> at IIT Gandhinagar.</span>,
  },
  {
    date: 'Jan 26, 2025',
    text: <span>Placed on the <span className="underline text-orange-600">Dean’s List</span> for Semester 1, 2024-2025 at IIT Gandhinagar! <span>🎉</span></span>,
  },
  {
    date: 'Nov 06, 2024',
    text: <span>Became a <span className="font-semibold text-orange-600">Core Member</span> of the <span className="font-semibold text-orange-600">ML Club</span> at IIT Gandhinagar.</span>,
  },
  {
    date: 'Sept 03, 2024',
    text: <span>Selected as <span className="font-semibold text-orange-600">ADH Mentor</span> for <span className="font-semibold text-orange-600">MA 103: Calculus of Single Variable and Linear Algebra</span>, guiding and helping 50+ students.</span>,
  },
  {
    date: 'Sept 20, 2024',
    text: <span>Joined the <span className="font-semibold text-orange-600">Blithchron Tech Team</span> at IIT Gandhinagar.</span>,
  },
  {
    date: 'Jan 26, 2024',
    text: <span>Placed on the <span className="underline text-orange-600">Dean’s List</span> for Semester 1, 2023-2024 at IIT Gandhinagar! <span>🎉</span></span>,
  },
  {
    date: 'April 15, 2024',
    text: <span>Secured <span className="font-semibold text-orange-600">Runner Up</span> position at <span className="font-semibold text-orange-600">HackRush 2024</span>.</span>,
  },
];

const About: React.FC = () => (
  <section className="min-h-screen bg-zinc-100 dark:bg-slate-900 transition-colors duration-300 py-16 px-6 font-sans">
    <div className="max-w-screen-2xl mx-auto px-4 md:px-16">
      <h1 className="text-5xl font-extrabold text-center text-black dark:text-white mb-8" style={{ fontFamily: 'Inter, DM Sans, sans-serif' }}>
        About Me
      </h1>
      {/* Top Card: Bio, Skills, Profile */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl overflow-hidden max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-stretch">
        {/* Left: Avatar, Name, Socials */}
        <div className="flex flex-col items-center w-full md:w-1/3 py-10 px-8 bg-zinc-50 dark:bg-slate-900 border-b md:border-b-0 md:border-r border-zinc-200 dark:border-slate-700">
          <div className="relative mb-4">
            <span className="absolute inset-0 rounded-full ring-4 ring-blue-400 dark:ring-blue-500" style={{ zIndex: 1 }}></span>
            <img
              src="/assets/profile.jpg"
              alt="Soham Gaonkar"
              className="w-28 h-28 rounded-full object-cover border-4 border-white dark:border-slate-800 shadow-lg relative z-10"
            />
          </div>
          <h2 className="text-2xl font-extrabold text-black dark:text-white mb-2 mt-2 text-center" style={{ fontFamily: 'Inter, DM Sans, sans-serif' }}>
            Soham Gaonkar
          </h2>
          <p className="text-lg text-gray-600 dark:text-slate-300 text-center mb-6" style={{ fontFamily: 'Inter, DM Sans, sans-serif' }}>
            AI Undergraduate at IIT Gandhinagar
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/Soham-Gaonkar" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-black dark:text-slate-200 hover:text-gray-700 dark:hover:text-blue-400 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.021C22 6.484 17.523 2 12 2z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/soham-gaonkar-885426280/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-black dark:text-slate-200 hover:text-gray-700 dark:hover:text-blue-400 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.966 0-1.75-.79-1.75-1.75s.784-1.75 1.75-1.75 1.75.79 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
            </a>
            <a href="mailto:soham.gaonkar@iitgn.ac.in" className="text-black dark:text-slate-200 hover:text-red-600 transition" aria-label="Email">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 6.81A2.25 2.25 0 0 1 4.25 5.5h15.5c.83 0 1.6.5 1.99 1.31.13.26.21.54.25.83v10.06A2.25 2.25 0 0 1 19.75 20.5H4.25A2.25 2.25 0 0 1 2 18.7V7.64c.04-.29.12-.57.25-.83zm1.72.69l8.27 6.2c.2.15.47.15.67 0l8.27-6.2a.75.75 0 0 0-.47-.19H4.25a.75.75 0 0 0-.52.19zm16.77 1.62l-6.98 5.23a2.25 2.25 0 0 1-2.72 0l-6.98-5.23V18.7c0 .41.34.75.75.75h15.5c.41 0 .75-.34.75-.75V9.12z"/></svg>
            </a>
          </div>
        </div>
        <div className="flex-1 w-full md:pl-12 flex flex-col justify-center py-12 px-8">
          <p className="text-xl text-gray-700 dark:text-slate-200 mb-10 leading-relaxed" style={{ fontFamily: 'Inter, DM Sans, sans-serif' }}>
            I'm a junior at IIT Gandhinagar, majoring in Artificial Intelligence with a strong interest in the intersection of mathematics, computing and physics. I enjoy exploring algorithm design and data-driven insights to solve real-world problems. My current focus includes Data Science, Computer Vision, and Applied Machine Learning.
          </p>
          <h3 className="text-2xl font-bold mb-4 text-black dark:text-white" style={{ fontFamily: 'Inter, DM Sans, sans-serif' }}>
            Skills & Interests
          </h3>
          <ul className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <li
                key={skill}
                className="px-6 py-3 bg-zinc-100 dark:bg-slate-700 text-black dark:text-slate-200 rounded-full text-lg font-semibold shadow-sm"
                style={{ fontFamily: 'Inter, DM Sans, sans-serif' }}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* News Card */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl max-w-4xl mx-auto mt-12 p-6 md:p-10">
        <h3 className="text-2xl font-bold mb-6 text-black dark:text-white" style={{ fontFamily: 'Inter, DM Sans, sans-serif' }}>
          News
        </h3>
        <div className="relative">
          {/* Vertical line - hidden on mobile, visible on larger screens */}
          <div className="hidden md:block absolute left-4 top-0 bottom-0 w-0.5 bg-zinc-200 dark:bg-slate-700" />
          <ul className="space-y-6 md:space-y-10 pl-0 md:pl-8">
            {news.map((item, idx) => (
              <li key={idx} className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                <div className="flex-shrink-0 w-full md:w-32 text-base text-gray-500 font-semibold md:text-right">
                  <div className="bg-white dark:bg-slate-800 border border-zinc-200 dark:border-slate-700 rounded-lg px-4 py-2 shadow text-gray-600 dark:text-slate-300 text-base md:text-lg font-semibold mb-2 text-center md:text-left">
                    {item.date}
                  </div>
                </div>
                <div className="flex-1 bg-zinc-50 dark:bg-slate-900 rounded-xl px-4 md:px-7 py-4 md:py-6 shadow-sm text-base md:text-lg text-gray-800 dark:text-slate-200 leading-relaxed max-w-2xl border border-zinc-100 dark:border-slate-800">
                  {item.text}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    {/* Go to Top Link */}
    <div className="flex justify-center mt-12">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="text-lg text-blue-600 underline hover:text-blue-800 transition font-semibold"
        aria-label="Go to top"
      >
        Go to Top
      </button>
    </div>
  </section>
);

export default About; 