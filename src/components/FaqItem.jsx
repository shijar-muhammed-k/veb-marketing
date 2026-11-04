import React from 'react';

export default function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className={`faq-item${isOpen ? ' open' : ''}`}>
      <div className="faq-question" onClick={onToggle}>
        <span>{question}</span>
        <span className="faq-icon">{isOpen ? '–' : '+'}</span>
      </div>
      <div className="faq-answer">{answer}</div>
    </div>
  );
}
