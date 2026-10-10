import React from 'react';

export default function Hero() {
  return (
    <header class="hero" id="home">
      <img
        class="hero-bg-img"
        src="/extracted_assets/image1_14_197.png"
        alt="Facility Management Hologram Visual"
      />
      <div class="hero-wrap">
        <div class="hero-content">
          <h1>Facility Management Made Smarter for Modern Businesses</h1>
          <p>
            Manage your facilities smarter with a centralized system that simplifies sourcing,
            purchasing, approvals, and payments – all in one place.
          </p>
          <div class="btns">
            <a class="btn btn-teal" href="#services">
              See Our HSE Portfolio
            </a>
            <a class="btn btn-dark" href="#contact">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
