import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { translations } from '../translations/translations';

const LanguageContext = createContext(null);

export function getLanguageFromUrl() {
  if (typeof window === 'undefined') return null;

  const pathname = (window.location.pathname || '').toLowerCase();
  if (pathname === '/ar' || pathname.startsWith('/ar/')) {
    return 'ar';
  }
  if (pathname === '/en' || pathname.startsWith('/en/')) {
    return 'en';
  }

  const params = new URLSearchParams(window.location.search);
  const qLang = params.get('lang');
  if (qLang === 'ar' || qLang === 'en') {
    return qLang;
  }

  return null;
}

export function getInitialLanguage() {
  const urlLang = getLanguageFromUrl();
  if (urlLang) return urlLang;

  try {
    const saved = localStorage.getItem('veb_lang');
    if (saved === 'ar' || saved === 'en') return saved;
  } catch {
    // localStorage may be disabled or restricted
  }

  return 'en';
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => getInitialLanguage());

  const applyLanguageToDoc = useCallback((targetLang) => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = targetLang;
      document.documentElement.dir = targetLang === 'ar' ? 'rtl' : 'ltr';
      if (targetLang === 'ar') {
        document.body.classList.add('rtl');
        document.body.classList.remove('ltr');
      } else {
        document.body.classList.add('ltr');
        document.body.classList.remove('rtl');
      }
    }
  }, []);

  const changeLanguage = useCallback((newLang, updateHistory = true) => {
    if (newLang !== 'en' && newLang !== 'ar') return;

    setLangState(newLang);
    applyLanguageToDoc(newLang);

    try {
      localStorage.setItem('veb_lang', newLang);
    } catch {
      // Ignore storage errors
    }

    if (updateHistory && typeof window !== 'undefined') {
      const currentPath = window.location.pathname || '/';
      const currentHash = window.location.hash || '';

      // Strip existing language prefixes
      let cleanPath = currentPath.replace(/^\/(en|ar)(\/|$)/, '/').replace(/\/+$/, '') || '/';

      let newPath = '';
      if (cleanPath === '/' || cleanPath === '') {
        newPath = `/${newLang}`;
      } else {
        newPath = `/${newLang}${cleanPath}`;
      }

      const newUrl = newPath + currentHash;
      if (window.location.pathname + window.location.hash !== newUrl) {
        window.history.pushState({ lang: newLang }, '', newUrl);
      }
    }
  }, [applyLanguageToDoc]);

  const toggleLanguage = useCallback(() => {
    changeLanguage(lang === 'ar' ? 'en' : 'ar', true);
  }, [lang, changeLanguage]);

  // Sync on initial load and handle browser back / forward navigation
  useEffect(() => {
    applyLanguageToDoc(lang);

    const handlePopState = () => {
      const detected = getLanguageFromUrl();
      if (detected && detected !== lang) {
        changeLanguage(detected, false);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [lang, applyLanguageToDoc, changeLanguage]);

  const t = translations[lang] || translations.en;
  const isRTL = lang === 'ar';

  const value = {
    lang,
    isRTL,
    t,
    setLanguage: changeLanguage,
    toggleLanguage
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

