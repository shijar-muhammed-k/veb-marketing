import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="sec" id="about" style={{ paddingTop: '10px', paddingBottom: '60px' }}>
      <div className="wrap">
        <div className="about-grid">
          <div className="about-text">
            <span className="pill">{t.about.pill}</span>
            <h2>{t.about.title}</h2>
            <p>{t.about.description}</p>
          </div>
          <div className="about-img-wrap">
            <img src="/extracted_assets/image2_14_197.png" alt={t.about.imgAlt} />
          </div>
        </div>
      </div>
    </section>
  );
}
