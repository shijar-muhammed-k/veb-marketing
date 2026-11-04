import React, { useEffect } from 'react';
import ContactForm from './ContactForm';
import { useLanguage } from '../context/LanguageContext';

export default function ContactModal({ isOpen, onClose }) {
  const { t } = useLanguage();

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="contact-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div
        className="contact-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="contact-modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>

        <div className="contact-grid">
          <div className="contact-img-wrap">
            <img
              className="contact-img"
              src="/extracted_assets/image22_14_197.jpeg"
              alt={t.contact.imgAlt}
            />
          </div>
          <div className="contact-form-wrap">
            <h2 id="contact-modal-title">{t.contact.title}</h2>
            <p>{t.contact.description}</p>
            <ContactForm onSuccess={onClose} isModal={true} />
          </div>
        </div>
      </div>
    </div>
  );
}
