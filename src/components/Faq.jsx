import React, { useState } from 'react';
import FaqItem from './FaqItem';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'What is VEB?',
      answer:
        'VEB is a secure digital Procure-to-Pay (P2P) platform that simplifies procurement by managing everything from supplier sourcing to purchase approvals, invoicing, and payments.'
    },
    {
      question: 'What industries does VEB support?',
      answer:
        'VEB is tailored for Facility Management, MRO, construction, commercial real estate, logistics, and any asset-heavy enterprise requiring organized multi-vendor procurement.'
    },
    {
      question: 'What features does VEB offer?',
      answer:
        'Supplier management, verified vendor directories, live activity dashboards, spend analytics, AI-assisted sourcing recommendations, and automated 3-way matching AP invoice workflows.'
    },
    {
      question: 'How does VEB improve procurement efficiency?',
      answer:
        'By automating multi-tier approval chains, eliminating manual paper trails, offering real-time spend tracking, and accelerating vendor negotiations with AI insights.'
    },
    {
      question: 'Is my business data secure?',
      answer:
        'Yes. All data is encrypted both in transit (TLS 1.3) and at rest (AES-256), hosted in SOC 2 Type II compliant cloud facilities with role-based access control.'
    }
  ];

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section class="sec" id="faq">
      <div class="wrap">
        <span class="pill">FAQ</span>
        <h2 class="sec-title">Got Questions?</h2>
        <div class="faq-wrap">
          {faqs.map((faq, index) => (
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
