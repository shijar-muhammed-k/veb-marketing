import React, { useEffect } from 'react';
import ContactForm from './ContactForm';

export default function ContactModal({ isOpen, onClose }) {
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
      class="contact-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div
        class="contact-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          class="contact-modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>

        <div class="contact-grid">
          <div class="contact-img-wrap">
            <img
              class="contact-img"
              src="/extracted_assets/image22_14_197.jpeg"
              alt="VEB Support Representative"
            />
          </div>
          <div class="contact-form-wrap">
            <h2 id="contact-modal-title">Let's Start the Conversation</h2>
            <p>
              Let's connect. Whether you're a buyer, supplier, or partner, we're happy to answer
              your questions and help you get started.
            </p>
            <ContactForm onSuccess={onClose} isModal={true} />
          </div>
        </div>
      </div>
    </div>
  );
}
