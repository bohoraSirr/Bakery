import React, { useState, useEffect } from 'react';
import { Search, User, Moon, Sun, Croissant } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Check local storage or system preference on mount
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Left: Logo */}
        <div className="navbar-left">
          <div className="logo-container">
            <Croissant className="logo-icon" size={28} />
            <span className="logo-text">Smrit Store</span>
          </div>
        </div>

        {/* Middle: Empty space (flex-grow handles this in CSS) */}
        <div className="navbar-middle"></div>

        {/* Right: Actions */}
        <div className="navbar-right">
          <button className="icon-btn" aria-label="Search">
            <Search size={22} />
          </button>

          <button className="icon-btn theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {isDark ? <Sun size={22} className="icon-sun" /> : <Moon size={22} className="icon-moon" />}
          </button>

          <button className="icon-btn profile-btn" aria-label="Profile">
            <User size={22} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
