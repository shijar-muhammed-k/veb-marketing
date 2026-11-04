import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero({ onContactClick }) {
  const { t } = useLanguage();

  const handleContactClick = (e) => {
    if (onContactClick) {
      e.preventDefault();
      onContactClick();
    }
  };

  return (
    <header className="hero" id="home">
      <img
        className="hero-bg-img"
        src={t.hero.bgImag}
        alt={t.hero.bgImgAlt}
      />
      <div className="hero-wrap">
        <div className="hero-content">
          <h1>{t.hero.title}</h1>
          <p>{t.hero.description}</p>
          <div className="btns">
            <a className="btn btn-teal" href="#services">
              {t.hero.seePortfolio}
            </a>
            <a
              className="btn btn-dark"
              href="#contact"
              onClick={handleContactClick}
            >
              {t.hero.contactUs}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
