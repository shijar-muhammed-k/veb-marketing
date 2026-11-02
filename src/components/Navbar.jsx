import React from 'react';

export default function Navbar({
  onContactClick,
  onNavigate,
  currentRoute = '/',
  loginUrl = import.meta.env.VITE_LOGIN_URL || 'https://app.vebqatar.com/login'
}) {
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
        window.location.href = `/${sectionId ? '#' + sectionId : ''}`;
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
          href="/"
          onClick={(e) => handleNavLink(e, '/', '')}
          aria-label="VEB Home"
        >
          <img src="/assets/veb-logo.svg" alt="VEB Logo" style={{ width: '125px' }} />
        </a>

        <ul className="nav-links">
          <li>
            <a href="/#home" onClick={(e) => handleNavLink(e, '/', 'home')}>
              Home
            </a>
          </li>
          <li>
            <a href="/#about" onClick={(e) => handleNavLink(e, '/', 'about')}>
              About Us
            </a>
          </li>
          <li>
            <a href="/#features" onClick={(e) => handleNavLink(e, '/', 'features')}>
              Features
            </a>
          </li>
          <li>
            <a href="/#services" onClick={(e) => handleNavLink(e, '/', 'services')}>
              Solutions
            </a>
          </li>

          <div className="nav-actions">
            <a
              className="btn btn-outline"
              style={{ minWidth: '150px' }}
              href={loginUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Login
            </a>
            <a
              className="btn btn-dark"
              style={{ minWidth: '150px' }}
              href="#contact"
              onClick={handleContactClick}
            >
              Contact Us
            </a>
          </div>
        </ul>
      </div>
    </nav>
  );
}
