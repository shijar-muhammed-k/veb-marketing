import React from 'react';
import ContactForm from './ContactForm';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section className="sec" id="contact" style={{ paddingTop: '30px', paddingBottom: '40px' }}>
      <div className="wrap">
        <div className="contact-grid">
          <div className="contact-img-wrap">
            <img
              className="contact-img"
              src="/extracted_assets/image22_14_197.jpeg"
              alt={t.contact.imgAlt}
            />
          </div>
          <div className="contact-form-wrap">
            <h2>{t.contact.title}</h2>
            <p>{t.contact.description}</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
