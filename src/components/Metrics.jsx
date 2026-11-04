import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Metrics() {
  const { t } = useLanguage();

  return (
    <section className="sec">
      <div className="wrap">
        <span className="pill">{t.metrics.pill}</span>
        <h2 className="sec-title">{t.metrics.title}</h2>
        <div className="stats-bar">
          {t.metrics.items.map((item, index) => (
            <div className="stats-col" key={index}>
              <b>{item.value}</b>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
