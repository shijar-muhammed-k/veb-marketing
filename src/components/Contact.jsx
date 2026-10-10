import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! A VEB specialist will contact you shortly.');
    setSubmitted(true);
  };

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
            <form onSubmit={handleSubmit}>
              <div class="form-row">
                <div class="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Sam Alexander"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div class="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="olivia@untitledui.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div class="form-group">
                <label>Contact Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 952 667 7333"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div class="form-group">
                <label>Notes</label>
                <textarea
                  name="notes"
                  placeholder="Write A Message"
                  value={formData.notes}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div style={{ textAlign: 'right', marginTop: '20px' }}>
                <button
                  type="submit"
                  class="btn btn-dark"
                  style={{ padding: '16px 84px', fontSize: '14px' }}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
