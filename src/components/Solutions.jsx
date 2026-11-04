import React, { useState } from 'react';
import CategoryCard from './CategoryCard';
import { useLanguage } from '../context/LanguageContext';

export default function Solutions() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('services');

  return (
    <section className="sec" id="services" style={{ paddingTop: '20px' }}>
      <div className="wrap">
        <span className="pill">{t.solutions.pill}</span>
        <h2 className="sec-title">{t.solutions.title}</h2>
        <div className="tabs">
          <button
            className={`tab-btn${activeTab === 'services' ? ' active' : ''}`}
            onClick={() => setActiveTab('services')}
            type="button"
          >
            {t.solutions.tabServices}
          </button>
          <button
            className={`tab-btn${activeTab === 'products' ? ' active' : ''}`}
            onClick={() => setActiveTab('products')}
            type="button"
          >
            {t.solutions.tabProducts}
          </button>
        </div>

        {activeTab === 'services' && (
          <div id="services-tab-content" className="tab-content">
            <div className="category-grid">
              {t.solutions.services.map((item, index) => (
                <CategoryCard
                  key={index}
                  title={item.title}
                  description={item.description}
                  imgSrc={item.imgSrc}
                  imgAlt={item.title}
                />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'products' && (
          <div id="products-tab-content" className="tab-content">
            <div className="category-grid">
              {t.solutions.products.map((item, index) => (
                <CategoryCard
                  key={index}
                  title={item.title}
                  description={item.description}
                  imgSrc={item.imgSrc}
                  imgAlt={item.title}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
