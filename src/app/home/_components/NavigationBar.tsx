"use client";

import React, { useState, useEffect } from "react";

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "zh", name: "Chinese", flag: "🇨🇳" },
  { code: "fr", name: "French", flag: "🇫🇷" },
  { code: "jp", name: "Japanese", flag: "🇯🇵" },
  { code: "es", name: "Spanish", flag: "🇪🇸" },
];

const NavigationBar = () => {
  const [currentLang, setCurrentLang] = useState(languages[0]);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLangDropdown = () => setIsLangOpen(!isLangOpen);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  const selectLanguage = (lang: (typeof languages)[0]) => {
    setCurrentLang(lang);
    setIsLangOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <nav className="home__nav">
      <div className="home__nav-container">
        <div className="home__nav-left">
          <div className="home__logo">
            <span className="home__logo-text">JD</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="home__nav-list">
          <li>
            <a href="#hero" className="home__nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="#projects" className="home__nav-link">
              Work
            </a>
          </li>
          <li>
            <a href="#experience" className="home__nav-link">
              Experience
            </a>
          </li>
          <li>
            <a href="#contact" className="home__nav-link">
              Contact
            </a>
          </li>
        </ul>

        {/* Desktop Right Section (Language + Resume) */}
        <div className="home__nav-right">
          <div className="home__lang-dropdown">
            <button
              className="home__lang-btn"
              onClick={toggleLangDropdown}
              aria-label="Select Language"
            >
              <span className="home__lang-flag">{currentLang.flag}</span>
              <span className="home__lang-code">{currentLang.name}</span>
              <span className={`home__lang-arrow ${isLangOpen ? "open" : ""}`}>
                ▼
              </span>
            </button>

            {isLangOpen && (
              <ul className="home__lang-menu">
                {languages.map((lang) => (
                  <li key={lang.code}>
                    <button
                      className="home__lang-option"
                      onClick={() => selectLanguage(lang)}
                    >
                      <span className="home__lang-flag">{lang.flag}</span>
                      <span className="home__lang-name">{lang.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="home__resume-btn"
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className={`home__mobile-toggle ${isMobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`home__mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <ul className="home__mobile-links">
          <li>
            <a href="#hero" onClick={closeMobileMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#projects" onClick={closeMobileMenu}>
              Work
            </a>
          </li>
          <li>
            <a href="#experience" onClick={closeMobileMenu}>
              Experience
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMobileMenu}>
              Contact
            </a>
          </li>
        </ul>

        <div className="home__mobile-actions">
          {/* Mobile Language Selector (Simplified) */}
          <div className="home__mobile-lang">
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={`home__mobile-lang-btn ${currentLang.code === lang.code ? "active" : ""}`}
                onClick={() => {
                  selectLanguage(lang);
                }}
              >
                <span style={{ fontSize: "20px" }}>{lang.flag}</span>
              </button>
            ))}
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="home__resume-btn full-width"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
