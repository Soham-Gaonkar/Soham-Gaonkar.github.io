import React from 'react';

const Resume: React.FC = () => {
  const handleViewResume = () => {
    window.open('/assets/resume.pdf', '_blank');
  };

  return (
    <section className="min-h-screen bg-zinc-100 dark:bg-zinc-900 transition-colors duration-300 py-24 px-6 font-sans">
      <div className="max-w-screen-md mx-auto px-2 md:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-6">
          <h1 className="text-5xl font-extrabold text-slate-900 dark:text-white mb-2 sm:mb-0" style={{ fontFamily: 'Inter, DM Sans, sans-serif' }}>
            Resume
          </h1>
          <button
            onClick={handleViewResume}
            className="flex items-center gap-3 px-8 py-4 rounded-lg bg-slate-800 text-white dark:bg-white dark:text-slate-900 font-semibold text-xl shadow hover:scale-105 transition-all duration-300"
            aria-label="View Resume PDF"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V6m0 0l-7 7m7-7l7 7" />
            </svg>
            PDF
          </button>
        </div>
        <hr className="border-gray-200 dark:border-gray-700 mb-8" />
        <p className="text-xl text-gray-500 dark:text-gray-400 mb-10" style={{ fontFamily: 'Inter, DM Sans, sans-serif' }}>
          To download my resume, click on the PDF button alongside.
        </p>
        <div className="w-full rounded-lg overflow-hidden shadow-md bg-white dark:bg-zinc-800 border border-gray-200 dark:border-gray-700">
          <embed
            src="/assets/resume.pdf"
            type="application/pdf"
            className="w-full"
            style={{ minHeight: '70vh', height: '80vh' }}
          />
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
};

export default Resume; 