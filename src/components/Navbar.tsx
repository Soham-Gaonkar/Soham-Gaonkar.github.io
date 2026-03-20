import React, { useMemo, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/resume', label: 'Resume' },
  { to: '/contact', label: 'Contact' },
  // { to: '/blog', label: 'Blog' },
];

type SearchEntry = {
  to: string;
  label: string;
  text: string;
};

type SearchResult = {
  to: string;
  label: string;
  snippet: string;
};

const searchIndex: SearchEntry[] = [
  {
    to: '/',
    label: 'Home',
    text:
      'Soham Gaonkar AI Undergraduate at IIT Gandhinagar Exploring mathematics computing physics Data Science Computer Vision Applied Machine Learning Download CV Contact Me',
  },
  {
    to: '/about',
    label: 'About',
    text:
      'Hi I am Soham Gaonkar junior undergraduate Artificial Intelligence IIT Gandhinagar skills interests Data Science Computer Vision Machine Learning NLP Computer Graphics news timeline CVIG Lab Summer Research Intern incoming R&D Summer Intern Samsung Research Institute IEEE IUS 2025 Dean List HackRush',
  },
  {
    to: '/projects',
    label: 'Projects',
    text:
      '3D Scene Reconstruction panorama Ultrasound Segmentation Histotripsy MiniTorch JPEG Compression FPGA Human Activity Recognition Text Generator Streamlit Image Classification Super-Resolution Facial Image Generation VAE FAQ NLP Assistant RoboRig Runner-Up',
  },
  {
    to: '/resume',
    label: 'Resume',
    text:
      'Resume CV download PDF education internship achievements technical skills projects',
  },
  {
    to: '/contact',
    label: 'Contact',
    text:
      'Contact email linkedin github leetcode soham gaonkar reach out connect',
  },
];

const buildSnippet = (text: string, query: string) => {
  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();
  const matchIndex = lowerText.indexOf(lowerQuery);

  if (matchIndex === -1) {
    return text.slice(0, 110).trim();
  }

  const start = Math.max(0, matchIndex - 35);
  const end = Math.min(text.length, matchIndex + query.length + 45);
  const prefix = start > 0 ? '... ' : '';
  const suffix = end < text.length ? ' ...' : '';

  return `${prefix}${text.slice(start, end).trim()}${suffix}`;
};

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const filteredSearchResults = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      return [] as SearchResult[];
    }

    return searchIndex
      .filter((entry) => entry.text.toLowerCase().includes(query) || entry.label.toLowerCase().includes(query))
      .map((entry) => ({
        to: entry.to,
        label: entry.label,
        snippet: buildSnippet(entry.text, query),
      }))
      .slice(0, 6);
  }, [searchQuery]);

  const handleSearchResultClick = (to: string, query: string) => {
    navigate(`${to}?q=${encodeURIComponent(query)}`);
    setIsMobileMenuOpen(false);
    setIsSearchFocused(false);
  };

  const handleSearchSubmit = () => {
    const query = searchQuery.trim();
    if (!query || filteredSearchResults.length === 0) {
      return;
    }

    handleSearchResultClick(filteredSearchResults[0].to, query);
  };

  return (
    <nav className="w-full h-20 md:h-24 flex items-center px-4 md:px-10 font-sans bg-[#f9fafb] dark:bg-slate-900 relative">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between w-full">
        {/* Left: Name */}
        <div className="text-3xl md:text-6xl font-medium text-black dark:text-white tracking-tight whitespace-nowrap" style={{ fontFamily: 'Inter, DM Sans, sans-serif' }}>
          Soham Gaonkar
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-7">
          <div className="flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-xl md:text-2xl font-semibold px-4 py-1 transition-all duration-200
                  ${location.pathname === link.to
                    ? 'text-black dark:text-white'
                    : 'hover:text-black dark:hover:text-white text-gray-700 dark:text-slate-300'}
                `}
                style={{ fontFamily: 'Inter, DM Sans, sans-serif' }}
              >
                {link.label}
              </Link>
            ))}
          </div>
          {/* Search */}
          <div className="flex items-center gap-4 md:gap-5 ml-6 relative">
            <div className="relative" data-search-skip="true">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-transparent">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      handleSearchSubmit();
                    }
                    if (event.key === 'Escape') {
                      setIsSearchFocused(false);
                    }
                  }}
                  placeholder="Search"
                  className="w-36 lg:w-44 text-base bg-transparent text-slate-800 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:outline-none"
                  aria-label="Search across website"
                />
              </div>

              {isSearchFocused && searchQuery.trim() && (
                <div className="absolute top-full mt-2 right-0 w-[26rem] max-w-[80vw] bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 rounded-xl shadow-xl p-2 z-50">
                  {filteredSearchResults.length === 0 && (
                    <div className="px-3 py-2 text-sm text-slate-500 dark:text-slate-400">No results found.</div>
                  )}

                  {filteredSearchResults.map((result, index) => (
                    <button
                      key={`${result.to}-${index}`}
                      onClick={() => handleSearchResultClick(result.to, searchQuery.trim())}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors"
                    >
                      <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">{result.label}</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">{result.snippet}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setIsSearchFocused((value) => !value)}
            className="px-2 py-1 text-black dark:text-slate-200 hover:text-gray-700 dark:hover:text-white transition-colors duration-200"
            aria-label="Open search"
          >
            Search
          </button>
          <button
            onClick={toggleMobileMenu}
            className="px-2 py-1 text-black dark:text-slate-200 hover:text-gray-700 dark:hover:text-white transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            Menu
          </button>
        </div>
      </div>

      {isSearchFocused && (
        <div className="md:hidden absolute top-full left-0 right-0 z-50 bg-white dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-700 shadow-md px-4 py-3" data-search-skip="true">
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-zinc-900">
            <svg className="w-4 h-4 text-slate-500 dark:text-slate-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35m0 0A7.5 7.5 0 1 0 6.1 6.1a7.5 7.5 0 0 0 10.6 10.6Z" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  handleSearchSubmit();
                }
              }}
              placeholder="Search"
              className="w-full text-sm bg-transparent text-slate-800 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:outline-none"
              aria-label="Search across website"
            />
          </div>

          {searchQuery.trim() && (
            <div className="mt-2 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 rounded-lg p-1">
              {filteredSearchResults.length === 0 && (
                <div className="px-3 py-2 text-sm text-slate-500 dark:text-slate-400">No results found.</div>
              )}

              {filteredSearchResults.map((result, index) => (
                <button
                  key={`${result.to}-mobile-${index}`}
                  onClick={() => handleSearchResultClick(result.to, searchQuery.trim())}
                  className="w-full text-left px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors"
                >
                  <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">{result.label}</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">{result.snippet}</div>
                </button>
              ))}
            </div>
          )}
        </div>
      )}

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
                    ? 'border-black dark:border-slate-200 text-black dark:text-white bg-gray-50 dark:bg-zinc-800'
                    : 'hover:border-black hover:dark:border-slate-200 hover:text-black dark:hover:text-white text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-zinc-800'}
                `}
                style={{ fontFamily: 'Inter, DM Sans, sans-serif' }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 