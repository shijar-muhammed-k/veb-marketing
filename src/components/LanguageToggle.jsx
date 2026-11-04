import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageToggle() {
  const { lang, setLanguage, toggleLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const timeoutRef = useRef(null);

  const isArabic = lang === 'ar';
  const targetLabel = isArabic ? 'English' : 'العربية';
  const targetHoverText = isArabic ? 'Switch to English' : 'التبديل إلى العربية';

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 220);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  const handleButtonClick = (e) => {
    e.preventDefault();
    toggleLanguage();
  };

  const handleSelect = (selectedLang) => {
    setLanguage(selectedLang);
    setIsOpen(false);
  };

  return (
    <div
      className="lang-toggle-container"
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        className={`lang-toggle-btn ${isOpen ? 'hovered' : ''}`}
        onClick={handleButtonClick}
        aria-label={t.nav.switchToAlt || targetHoverText}
        title={targetHoverText}
        aria-expanded={isOpen}
      >
        <svg
          className="lang-globe-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20M12 2a14.5 14.5 0 0 1 0 20" />
          <path d="M2 12h20" />
        </svg>

        <span className="lang-code-badge">{isArabic ? 'العربية' : 'EN'}</span>

        {/* Dynamic hover hint pill showing alternate language to toggle */}
        <span className="lang-hover-hint">
          {targetLabel}
        </span>
      </button>

      {/* Hover Dropdown showing both languages with 1-click selection */}
      <div className={`lang-dropdown ${isOpen ? 'open' : ''}`} role="menu">
        <div className="lang-dropdown-header">
          {t.nav.selectLanguage || (isArabic ? 'اختر اللغة' : 'Select Language')}
        </div>

        <button
          type="button"
          role="menuitem"
          className={`lang-option ${lang === 'en' ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            handleSelect('en');
          }}
        >
          <span className="lang-option-text">
            <span className="lang-option-name">English</span>
            <span className="lang-option-sub">الإنجليزية</span>
          </span>
          {lang === 'en' && (
            <svg className="lang-check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
        </button>

        <button
          type="button"
          role="menuitem"
          className={`lang-option ${lang === 'ar' ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            handleSelect('ar');
          }}
        >
          <span className="lang-option-text">
            <span className="lang-option-name" style={{ fontFamily: "'Cairo', sans-serif" }}>العربية</span>
            <span className="lang-option-sub">Arabic</span>
          </span>
          {lang === 'ar' && (
            <svg className="lang-check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
