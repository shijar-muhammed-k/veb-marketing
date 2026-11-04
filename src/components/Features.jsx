import React from 'react';
import FeatureCard from './FeatureCard';
import { useLanguage } from '../context/LanguageContext';

export default function Features() {
  const { t } = useLanguage();

  const iconConfigs = [
    {
      iconSrc: '/extracted_assets/image5_14_197.png'
    },
    {
      iconSvg: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 6C4 4.895 4.895 4 6 4H18C19.105 4 20 4.895 20 6V8H4V6Z" />
          <circle cx="6.66" cy="8" r="2.66" />
          <circle cx="12" cy="8" r="2.66" />
          <circle cx="17.33" cy="8" r="2.66" />
          <path d="M5 10.5H19V20C19 20.552 18.552 21 18 21H6C5.448 21 5 20.552 5 20V10.5Z" />
          <path d="M10 14H14V21H10V14Z" fill="#f8f9fa" />
        </svg>
      )
    },
    {
      iconSrc: '/extracted_assets/image7_14_197.png'
    },
    {
      iconSrc: '/extracted_assets/image8_14_197.png'
    },
    {
      iconSrc: '/extracted_assets/image9_14_197.png'
    },
    {
      iconSvg: (
        <svg viewBox="0 0 58 58" fill="none" width="48" height="48">
          <path
            d="M14 6C10.6863 6 8 8.68629 8 12V46C8 49.3137 10.6863 52 14 52H34C34.7956 52 35.5587 51.6839 36.1213 51.1213L49.1213 38.1213C49.6839 37.5587 50 36.7956 50 36V12C50 8.68629 47.3137 6 44 6H14Z"
            fill="#38c1a6"
          />
          <path
            d="M18 18H40M18 26H40M18 34H28"
            stroke="white"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M34 52V40C34 38.8954 34.8954 38 36 38H48"
            fill="#189d7d"
            fillOpacity="0.5"
          />
          <circle
            cx="40"
            cy="40"
            r="10"
            fill="#189d7d"
            stroke="white"
            strokeWidth="2.5"
          />
          <path
            d="M36 40L39 43L45 37"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    }
  ];

  return (
    <section className="sec" id="features">
      <div className="wrap">
        <span className="pill">{t.features.pill}</span>
        <h2 className="sec-title">
          {t.features.title1}
          <br />
          {t.features.title2}
        </h2>
        <div className="features-grid">
          {t.features.items.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              iconSrc={iconConfigs[index]?.iconSrc}
              iconSvg={iconConfigs[index]?.iconSvg}
              iconAlt={feature.iconAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
