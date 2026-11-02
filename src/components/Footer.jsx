import React from 'react';

export default function Footer({ onNavigate }) {
  const handleNav = (e, path, hash) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(path, hash);
    } else {
      window.location.href = path + (hash ? `#${hash}` : '');
    }
  };

  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <a
              className="footer-logo"
              href="/"
              onClick={(e) => handleNav(e, '/')}
              aria-label="VEB Home"
            >
              <img src="/extracted_assets/image23_14_197.png" alt="VEB Logo" />
            </a>
            <p className="footer-desc">
              We simplify procurement by connecting buyers with trusted suppliers through a
              secure, AI-powered platform that streamlines sourcing, purchasing, and supplier
              management.
            </p>
          </div>

          <div>
            <div className="footer-heading">Legal &amp; Privacy</div>
            <ul className="footer-links-list">
              <li>
                <a
                  href="/terms-and-conditions"
                  onClick={(e) => handleNav(e, '/terms-and-conditions')}
                >
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  onClick={(e) => handleNav(e, '/privacy-policy')}
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="footer-heading">Where We Are</div>
            <p style={{ color: '#ffffff', fontWeight: 600, marginBottom: '4px' }}>
              Head Office
            </p>
            <p style={{ lineHeight: 1.6, color: '#8193a5' }}>
              Al Matar Center
              <br />
              Building 272, 1st Floor
              <br />
              Office 107 - AL 02
              <br />
              Matar Qadeem
            </p>
          </div>

          <div>
            <div className="footer-heading">Connect Us</div>
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <span>info@vebqatar.com</span>
            </div>
            <p style={{ fontSize: '12px', color: '#64748b', marginTop: '12px', lineHeight: 1.5 }}>
              Commercial Registration: 247533<br />
              VEB For Digital Trade Services W.L.L.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-copy">
            &copy; 2026 VEB - Facility Management System. All rights reserved. Enterprise Facility Management &amp; Procurement Solutions.
          </div>
          <div className="footer-bottom-nav">
            <a
              href="/terms-and-conditions"
              onClick={(e) => handleNav(e, '/terms-and-conditions')}
            >
              Terms &amp; Conditions
            </a>
            <span className="footer-bottom-separator">&bull;</span>
            <a
              href="/privacy-policy"
              onClick={(e) => handleNav(e, '/privacy-policy')}
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
