import React from 'react';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section class="sec" id="contact" style={{ paddingTop: '30px', paddingBottom: '40px' }}>
      <div class="wrap">
        <div class="contact-grid">
          <div class="contact-img-wrap">
            <img
              class="contact-img"
              src="/extracted_assets/image22_14_197.jpeg"
              alt="VEB Support Representative"
            />
          </div>
          <div class="contact-form-wrap">
            <h2>Let's Start the Conversation</h2>
            <p>
              Let's connect. Whether you're a buyer, supplier, or partner, we're happy to answer
              your questions and help you get started.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
