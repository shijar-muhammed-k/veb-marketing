import React from 'react';

export default function Navbar() {
  return (
    <nav>
      <div class="nav-inner">
        <a class="nav-logo" href="#" aria-label="VEB Home">
          <img src="/extracted_assets/image0_14_197.png" alt="VEB Logo" />
        </a>
        <ul class="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#services">Solutions</a></li>
          <li><a class="btn btn-dark" href="#contact">Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
}
