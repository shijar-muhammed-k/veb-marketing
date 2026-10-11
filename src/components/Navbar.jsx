import React from 'react';

export default function Navbar({ onContactClick }) {
  const handleContactClick = (e) => {
    if (onContactClick) {
      e.preventDefault();
      onContactClick();
    }
  };

  return (
    <nav>
      <div class="nav-inner">
        <a class="nav-logo" href="#" aria-label="VEB Home">
          <img src="/assets/veb-logo.svg" alt="VEB Logo" style={{ width: '125px' }} />
        </a>
        <ul class="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#services">Solutions</a></li>
          <li>
            <a
              class="btn btn-dark"
              href="#contact"
              onClick={handleContactClick}
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
