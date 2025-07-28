import React from 'react';

const Resume: React.FC = () => {
  const handleViewResume = () => {
    window.open('/assets/resume.pdf', '_blank');
  };

  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <div className="text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Resume
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              To download my resume, click on the PDF button alongside.
            </p>
          </div>
          <button
            onClick={handleViewResume}
            className="mt-4 sm:mt-0 flex items-center px-5 py-3 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-700"
            aria-label="View Resume PDF"
          >
            <svg className="w-7 h-7 mr-2" fill="#fff" viewBox="0 0 24 24">
              <path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.828A2 2 0 0 0 19.414 8l-5.414-5.414A2 2 0 0 0 12.172 2H6zm6 1.414L18.586 10H13a1 1 0 0 1-1-1V3.414zM6 4h5v5a3 3 0 0 0 3 3h5v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4z" />
            </svg>
            PDF
          </button>
        </div>
        <div className="w-full rounded-lg overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <embed
            src="/assets/resume.pdf"
            type="application/pdf"
            className="w-full"
            style={{ minHeight: '70vh', height: '80vh' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Resume; 