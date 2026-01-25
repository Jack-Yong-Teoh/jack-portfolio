"use client";

import { useState } from "react";
import IMAGES from "@/assets";

const languages = [
  { code: "en", name: "English", flag: IMAGES.english_icon },
  { code: "zh", name: "中文", flag: IMAGES.china_icon },
  { code: "fr", name: "Français", flag: IMAGES.france_icon },
  { code: "jp", name: "日本語", flag: IMAGES.japan_icon },
  { code: "es", name: "Español", flag: IMAGES.spain_icon },
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
            <img className="home__logo-item" src={IMAGES.logo} alt="Logo" />
          </div>
        </div>

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
              <img
                className="home__lang-flag"
                src={currentLang.flag}
                alt={`${currentLang.name} flag`}
              />
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
                      <img
                        className="home__lang-flag"
                        src={lang.flag}
                        alt={`${lang.name} flag`}
                      />
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

          <button
            className={`home__mobile-toggle ${isMobileMenuOpen ? "active" : ""}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

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
