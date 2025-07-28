import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
  {
    title: 'How to Build a Modern React App',
    excerpt: 'Learn the essential steps and best practices for building a modern, scalable React application using the latest tools and libraries. This guide covers setup, structure, and deployment.',
    link: '/blog/post-1',
  },
  {
    title: 'Styling with Tailwind CSS: Tips & Tricks',
    excerpt: 'Discover how to use Tailwind CSS to rapidly style your web projects. We share tips, patterns, and advanced techniques for creating beautiful, responsive UIs with utility-first classes.',
    link: '/blog/post-2',
  },
  {
    title: 'Understanding React Router v6',
    excerpt: 'A quick introduction to React Router v6, its new features, and how to implement client-side routing in your React projects. Includes code samples and migration advice.',
    link: '/blog/post-3',
  },
];

const buttonClass =
  'inline-block px-5 py-2 text-sm font-medium rounded transition bg-slate-800 text-white hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-gray-200';

const Blog: React.FC = () => (
  <div className="min-h-screen bg-[#f9fafb] dark:bg-[#0f172a] transition-colors duration-300 flex flex-col justify-center">
    <div className="max-w-screen-xl mx-auto px-4 md:px-12 py-16">
      <h1 className="text-5xl font-semibold text-center text-slate-900 dark:text-white mb-6 border-b border-b-gray-200 pb-6">Blog</h1>
      <div className="flex flex-col gap-10 mt-14">
        {posts.map((post, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-slate-800 shadow-md rounded-xl p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 border border-transparent transition-transform duration-200 hover:scale-105"
          >
            <div className="flex-1">
              <h2 className="text-3xl font-semibold mb-4 text-slate-900 dark:text-white">{post.title}</h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 md:mb-0 leading-relaxed">
                {post.excerpt}
              </p>
            </div>
            <div className="flex-shrink-0 flex items-center">
              <Link
                to={post.link}
                className="inline-block px-7 py-3 text-lg font-medium rounded transition bg-slate-800 text-white hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-gray-200"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
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
    </div>
  </div>
);

export default Blog; 