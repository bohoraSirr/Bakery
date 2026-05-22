import React, { useState, useEffect } from "react";
import {
  Search,
  User,
  Moon,
  Sun,
  Croissant,
  ShoppingCart,
  Menu,
  X,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const getInitialDarkMode = () => {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  return savedTheme === "dark" || (!savedTheme && prefersDark);
};

const Navbar = () => {
  const [isDark, setIsDark] = useState(getInitialDarkMode);
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Left: Logo */}
        <div className="navbar-left">
          <Link to="/" className="logo-container">
            <Croissant className="logo-icon" size={28} />
            <span className="logo-text">Smrit Store</span>
          </Link>
        </div>

        {/* Middle: Navigation Links */}
        <div className={`navbar-middle ${isOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <Link
                to="/about-us"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Shop Address
              </Link>
            </li>
          </ul>
        </div>

        {/* Right: Actions */}
        <div className="navbar-right">
          <button className="icon-btn" aria-label="Search">
            <Search size={22} />
          </button>

          <button
            className="icon-btn theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            {isDark ? (
              <Sun size={22} className="icon-sun" />
            ) : (
              <Moon size={22} className="icon-moon" />
            )}
          </button>

          <button className="icon-btn cart-btn" aria-label="Cart">
            <ShoppingCart size={22} />
            <span className="cart-badge">0</span>
          </button>

          <Link
            to="/login"
            className="icon-btn profile-btn"
            aria-label="Profile"
            onClick={() => setIsOpen(false)}
          >
            <User size={22} />
          </Link>

          <button
            className="icon-btn menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
