import React, { useMemo, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const mainNavLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/resume', label: 'Resume' },
  { to: '/contact', label: 'Contact' },
];

const secondaryNavLinks = [
  { to: '/blog', label: 'Blog (🛠️)' },
  { to: '/chess', label: 'Chess' },
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
      'Hi I am Soham Gaonkar junior undergraduate Artificial Intelligence IIT Gandhinagar skills interests Python C++ PyTorch Transformers FastAPI Docker FPGA Computer Vision Machine Learning NLP Model Compression On-device AI news timeline CVIG Lab Summer Research Intern Next Level Labs Samsung R&D Institute Noida Soket AI Agri-LLM IEEE IUS 2025 Dean List Academic Excellence Scholarship HackRush',
  },
  {
    to: '/projects',
    label: 'Projects',
    text:
      '3D Scene Reconstruction panorama PanoTo3D Ultrasound Segmentation Histotripsy LLM Compression Neural Alignment Layer Merging SWaT Anomaly Detection Root Cause Analysis NebulaEdit AI Image Editor Adobe TechMeet Graph Streaming Library Python Jupyter Notebook MiniTorch JPEG Compression FPGA Human Activity Recognition Text Generator Streamlit Image Classification Super-Resolution Facial Image Generation VAE FAQ NLP Assistant RoboRig Runner-Up',
  },
  {
    to: '/resume',
    label: 'Resume',
    text:
      'Resume CV download PDF education internship achievements technical skills projects',
  },
  {
    to: '/blog',
    label: 'Blog',
    text:
      'Blog articles reading VLM on-device AI model compression representation geometry DeepLabV3 ultrasound histotripsy Samsung R&D Soket AI',
  },
  {
    to: '/chess',
    label: 'Chess',
    text:
      'Chess play game vs computer local AI minimax alpha-beta custom difficulty easy medium hard board theme settings reset undo flip board',
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
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMoreOpen, setIsMobileMoreOpen] = useState(false);
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
    <nav className="w-full min-h-[4rem] md:h-24 flex items-center px-3 sm:px-4 md:px-10 py-2 md:py-0 font-sans bg-[#f9fafb] dark:bg-slate-900 relative">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between w-full">
        <div className="text-[clamp(1.4rem,4.5vw,2rem)] md:text-4xl font-semibold text-black dark:text-white tracking-tight whitespace-nowrap truncate max-w-[50vw] md:max-w-none" style={{ fontFamily: 'Inter, DM Sans, sans-serif' }}>
          Soham Gaonkar
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-7">
          <div className="flex items-center gap-2">
            {mainNavLinks.map((link) => (
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

            {/* "More" Dropdown Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                className={`text-xl md:text-2xl font-semibold px-4 py-1 transition-all duration-200 flex items-center gap-1.5 focus:outline-none
                  ${secondaryNavLinks.some(link => location.pathname === link.to)
                    ? 'text-black dark:text-white'
                    : 'text-gray-700 dark:text-slate-300 hover:text-black dark:hover:text-white'}
                `}
                style={{ fontFamily: 'Inter, DM Sans, sans-serif' }}
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
              >
                <span>More</span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 top-full pt-2 w-48 z-50">
                  <div className="bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-xl shadow-xl p-2">
                    {secondaryNavLinks.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        onClick={() => setIsDropdownOpen(false)}
                        className={`block text-lg font-semibold px-4 py-2.5 rounded-lg transition-colors duration-150
                          ${location.pathname === link.to
                            ? 'bg-zinc-100 dark:bg-zinc-700 text-black dark:text-white'
                            : 'text-gray-700 dark:text-slate-300 hover:bg-zinc-50 dark:hover:bg-zinc-700/50 hover:text-black dark:hover:text-white'}
                        `}
                        style={{ fontFamily: 'Inter, DM Sans, sans-serif' }}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Search */}
          <div className="flex items-center gap-4 md:gap-5 ml-6 relative">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:text-black dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors duration-200"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.36 6.36-1.42-1.42M7.05 7.05 5.64 5.64m12.72 0-1.42 1.41M7.05 16.95l-1.41 1.41M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
                </svg>
              )}
            </button>
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
        <div className="md:hidden flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md text-black dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors duration-200"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.36 6.36-1.42-1.42M7.05 7.05 5.64 5.64m12.72 0-1.42 1.41M7.05 16.95l-1.41 1.41M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
              </svg>
            )}
          </button>
          <button
            onClick={() => setIsSearchFocused((value) => !value)}
            className="p-2 rounded-md text-black dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors duration-200"
            aria-label="Open search"
            title="Open search"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35m0 0A7.5 7.5 0 1 0 6.1 6.1a7.5 7.5 0 0 0 10.6 10.6Z" />
            </svg>
          </button>
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-md text-black dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors duration-200"
            aria-label="Toggle mobile menu"
            title="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
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
            {mainNavLinks.map((link) => (
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

            {/* Mobile "More" Expandable Group */}
            <div className="border-t border-gray-100 dark:border-gray-800 mt-2 pt-2">
              <button
                onClick={() => setIsMobileMoreOpen(!isMobileMoreOpen)}
                className={`w-full text-left text-lg font-semibold px-6 py-3 flex items-center justify-between transition-colors
                  ${secondaryNavLinks.some(link => location.pathname === link.to)
                    ? 'text-black dark:text-white bg-gray-50 dark:bg-zinc-800'
                    : 'text-gray-700 dark:text-slate-300'}
                `}
                style={{ fontFamily: 'Inter, DM Sans, sans-serif' }}
              >
                <span>More</span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${isMobileMoreOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              {isMobileMoreOpen && (
                <div className="bg-gray-50/50 dark:bg-zinc-800/30 pl-4">
                  {secondaryNavLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsMobileMoreOpen(false);
                      }}
                      className={`block text-base font-semibold px-8 py-3 border-l-4 border-transparent transition-all duration-200
                        ${location.pathname === link.to
                          ? 'border-black dark:border-slate-200 text-black dark:text-white bg-gray-100 dark:bg-zinc-800/80'
                          : 'text-gray-600 dark:text-slate-400 hover:text-black dark:hover:text-white'}
                      `}
                      style={{ fontFamily: 'Inter, DM Sans, sans-serif' }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 