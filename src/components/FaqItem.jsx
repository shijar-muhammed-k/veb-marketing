import React from 'react';

export default function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div class={`faq-item${isOpen ? ' open' : ''}`}>
      <div class="faq-question" onClick={onToggle}>
        <span>{question}</span>
        <span class="faq-icon">{isOpen ? '–' : '+'}</span>
      </div>
      <div class="faq-answer">{answer}</div>
    </div>
  );
}
