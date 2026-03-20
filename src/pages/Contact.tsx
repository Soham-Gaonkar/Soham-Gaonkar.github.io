import React from 'react';

type ContactLink = {
  label: string;
  href: string;
  description: string;
  icon: React.ReactNode;
};

const contactLinks: ContactLink[] = [
  {
    label: 'Email',
    href: 'mailto:soham.gaonkar@iitgn.ac.in',
    description: 'soham.gaonkar@iitgn.ac.in',
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M2.01 6.81A2.25 2.25 0 0 1 4.25 5.5h15.5c.83 0 1.6.5 1.99 1.31.13.26.21.54.25.83v10.06A2.25 2.25 0 0 1 19.75 20.5H4.25A2.25 2.25 0 0 1 2 18.7V7.64c.04-.29.12-.57.25-.83zm1.72.69l8.27 6.2c.2.15.47.15.67 0l8.27-6.2a.75.75 0 0 0-.47-.19H4.25a.75.75 0 0 0-.52.19zm16.77 1.62l-6.98 5.23a2.25 2.25 0 0 1-2.72 0l-6.98-5.23V18.7c0 .41.34.75.75.75h15.5c.41 0 .75-.34.75-.75V9.12z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/soham-gaonkar-885426280/',
    description: 'linkedin.com/in/soham-gaonkar-885426280',
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.966 0-1.75-.79-1.75-1.75s.784-1.75 1.75-1.75 1.75.79 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Soham-Gaonkar',
    description: 'github.com/Soham-Gaonkar',
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.021C22 6.484 17.523 2 12 2z" />
      </svg>
    ),
  },
  {
    label: 'LeetCode',
    href: 'https://leetcode.com/u/soham-gaonkar/',
    description: 'leetcode.com/u/soham-gaonkar',
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13.483 0a1.37 1.37 0 0 0-.961.397L1.46 11.459a1.37 1.37 0 0 0 0 1.938l6.806 6.806a1.37 1.37 0 1 0 1.938-1.938L4.367 12.43l9.116-9.116A1.37 1.37 0 0 0 13.483 0zm4.742 4.055a1.37 1.37 0 0 0-.967.4l-1.83 1.83a1.37 1.37 0 1 0 1.938 1.938l1.83-1.83a1.37 1.37 0 0 0-.97-2.338zM8.634 11.06a1.37 1.37 0 1 0 0 2.74h13.996a1.37 1.37 0 1 0 0-2.74H8.634z" />
      </svg>
    ),
  },
];

const Contact: React.FC = () => (
  <section className="min-h-[calc(100vh-5rem)] bg-zinc-100 dark:bg-slate-900 transition-colors duration-300 py-12 px-4 font-sans">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white text-center mb-3" style={{ fontFamily: 'Inter, DM Sans, sans-serif' }}>
        Contact
      </h1>
      <p className="text-center text-lg text-gray-600 dark:text-slate-300 mb-10" style={{ fontFamily: 'Inter, DM Sans, sans-serif' }}>
        Reach out through any of the platforms below.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        {contactLinks.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith('mailto:') ? undefined : '_blank'}
            rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
            className="group bg-white dark:bg-slate-800 border border-zinc-200 dark:border-slate-700 rounded-2xl p-5 md:p-6 flex items-center gap-4 hover:shadow-md transition-all"
          >
            <div className="text-black dark:text-white">{item.icon}</div>
            <div>
              <div className="text-xl font-semibold text-black dark:text-white">{item.label}</div>
              <div className="text-sm md:text-base text-gray-600 dark:text-slate-300 mt-1 break-all">{item.description}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Contact;
