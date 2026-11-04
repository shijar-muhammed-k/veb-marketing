import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer({ onNavigate }) {
  const { t, lang } = useLanguage();

  const handleNav = (e, path, hash) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(path, hash);
    } else {
      const fullPath = `/${lang}${path === '/' ? '' : path}`;
      window.location.href = fullPath + (hash ? `#${hash}` : '');
    }
  };

  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <a
              className="footer-logo"
              href={`/${lang}`}
              onClick={(e) => handleNav(e, '/')}
              aria-label="VEB Home"
            >
              <img src="/extracted_assets/image23_14_197.png" alt="VEB Logo" />
            </a>
            <p className="footer-desc">
              {t.footer.description}
            </p>
          </div>

          <div>
            <div className="footer-heading">{t.footer.legalHeading}</div>
            <ul className="footer-links-list">
              <li>
                <a
                  href={`/${lang}/terms-and-conditions`}
                  onClick={(e) => handleNav(e, '/terms-and-conditions')}
                >
                  {t.footer.terms}
                </a>
              </li>
              <li>
                <a
                  href={`/${lang}/privacy-policy`}
                  onClick={(e) => handleNav(e, '/privacy-policy')}
                >
                  {t.footer.privacy}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="footer-heading">{t.footer.whereWeAreHeading}</div>
            <p style={{ color: '#ffffff', fontWeight: 600, marginBottom: '4px' }}>
              {t.footer.headOffice}
            </p>
            <p style={{ lineHeight: 1.6, color: '#8193a5' }}>
              {t.footer.addressLines.map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  {idx < t.footer.addressLines.length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          </div>

          <div>
            <div className="footer-heading">{t.footer.connectUsHeading}</div>
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <span>info@vebqatar.com</span>
            </div>
            <p style={{ fontSize: '12px', color: '#64748b', marginTop: '12px', lineHeight: 1.5, whiteSpace: 'pre-line' }}>
              {t.footer.crText}
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-copy">
            {t.footer.copyright}
          </div>
          <div className="footer-bottom-nav">
            <a
              href={`/${lang}/terms-and-conditions`}
              onClick={(e) => handleNav(e, '/terms-and-conditions')}
            >
              {t.footer.terms}
            </a>
            <span className="footer-bottom-separator">&bull;</span>
            <a
              href={`/${lang}/privacy-policy`}
              onClick={(e) => handleNav(e, '/privacy-policy')}
            >
              {t.footer.privacy}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
