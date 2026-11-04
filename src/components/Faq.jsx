import React, { useState } from 'react';
import FaqItem from './FaqItem';
import { useLanguage } from '../context/LanguageContext';

export default function Faq() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="sec" id="faq">
      <div className="wrap">
        <span className="pill">{t.faq.pill}</span>
        <h2 className="sec-title">{t.faq.title}</h2>
        <div className="faq-wrap">
          {t.faq.items.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
