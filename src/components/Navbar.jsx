import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggle from './LanguageToggle';

export default function Navbar({
  onContactClick,
  onNavigate,
  currentRoute = '/',
  loginUrl = import.meta.env.VITE_LOGIN_URL || 'https://app.vebqatar.com/login'
}) {
  const { t, lang } = useLanguage();

  const handleContactClick = (e) => {
    if (onContactClick) {
      e.preventDefault();
      onContactClick();
    }
  };

  const handleNavLink = (e, path, sectionId) => {
    e.preventDefault();
    if (currentRoute !== '/') {
      if (onNavigate) {
        onNavigate('/', sectionId);
      } else {
        const base = `/${lang}`;
        window.location.href = `${base}${sectionId ? '#' + sectionId : ''}`;
      }
    } else {
      if (sectionId) {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <nav>
      <div className="nav-inner">
        <a
          className="nav-logo"
          href={`/${lang}`}
          onClick={(e) => handleNavLink(e, '/', '')}
          aria-label="VEB Home"
        >
          <img src="/assets/veb-logo.svg" alt="VEB Logo" style={{ width: '125px' }} />
        </a>

        <ul className="nav-links">
          <li>
            <a href={`/${lang}#home`} onClick={(e) => handleNavLink(e, '/', 'home')}>
              {t.nav.home}
            </a>
          </li>
          <li>
            <a href={`/${lang}#about`} onClick={(e) => handleNavLink(e, '/', 'about')}>
              {t.nav.about}
            </a>
          </li>
          <li>
            <a href={`/${lang}#features`} onClick={(e) => handleNavLink(e, '/', 'features')}>
              {t.nav.features}
            </a>
          </li>
          <li>
            <a href={`/${lang}#services`} onClick={(e) => handleNavLink(e, '/', 'services')}>
              {t.nav.solutions}
            </a>
          </li>
        </ul>

        <div className="nav-actions">
          <LanguageToggle />

          <a
            className="btn btn-outline"
            style={{ minWidth: '120px' }}
            href={loginUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.nav.login}
          </a>
          <a
            className="btn btn-dark"
            style={{ minWidth: '120px' }}
            href="#contact"
            onClick={handleContactClick}
          >
            {t.nav.contactUs}
          </a>
        </div>
      </div>
    </nav>
  );
}
