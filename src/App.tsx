import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import SearchHighlighter from './components/SearchHighlighter';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import { initializeAnalytics } from './utils/analytics';
// import Blog from './pages/Blog';

function App() {
  useEffect(() => {
    initializeAnalytics();
  }, []);

  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <SearchHighlighter />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/blog" element={<Blog />} /> */}
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
