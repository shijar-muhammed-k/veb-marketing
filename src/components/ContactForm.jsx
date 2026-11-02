import React, { useState } from 'react';

export default function ContactForm({ onSuccess, isModal = false }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    message: ''
  });

  const validate = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name || !formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    // Qatar Phone validation (8 digits)
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone) {
      newErrors.phone = 'Contact number is required.';
    } else if (cleanPhone.length !== 8) {
      newErrors.phone = 'Qatar phone number must be exactly 8 digits.';
    }

    // Message validation
    if (!formData.message || !formData.message.trim()) {
      newErrors.message = 'Message is required.';
    } else if (formData.message.trim().length < 5) {
      newErrors.message = 'Message must be at least 5 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handlePhoneChange = (e) => {
    // Restrict strictly to digits only, max 8 digits
    const digitsOnly = e.target.value.replace(/\D/g, '').slice(0, 8);
    setFormData((prev) => ({ ...prev, phone: digitsOnly }));
    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: '' }));
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setStatus({ loading: true, success: false, message: '' });

    const phone = `+974 ${formData.phone.trim()}`;

    const leadPayload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone,
      message: formData.message.trim(),
      company: ''
    };

    const mailPayload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      contactNumber: phone,
      message: formData.message.trim()
    };

    try {
      const leadsApiUrl =
        'https://dev.vebqatar.com/api/accounts/leads/';

      const mailApiUrl =
        'https://vebqatar.com/send-mail';

      // Call both APIs simultaneously
      const [leadResponse, mailResponse] = await Promise.all([
        fetch(leadsApiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(leadPayload)
        }),

        fetch(mailApiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(mailPayload)
        })
      ]);

      const [leadData, mailData] = await Promise.all([
        leadResponse.json().catch(() => ({})),
        mailResponse.json().catch(() => ({}))
      ]);

      const leadSuccess = leadResponse.ok;
      const mailSuccess = mailResponse.ok && mailData.success !== false;

      if (leadSuccess && mailSuccess) {
        setStatus({
          loading: false,
          success: true,
          message: 'Your enquiry has been submitted successfully.'
        });

        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });

        setErrors({});

        if (onSuccess) {
          setTimeout(() => {
            onSuccess();
          }, 1500);
        }

      } else if (leadSuccess && !mailSuccess) {
        setStatus({
          loading: false,
          success: false,
          message: 'Your enquiry was saved, but the notification email could not be sent.'
        });

      } else if (!leadSuccess && mailSuccess) {
        setStatus({
          loading: false,
          success: false,
          message: 'Email sent, but your enquiry could not be saved. Please contact us.'
        });

      } else {
        setStatus({
          loading: false,
          success: false,
          message:
            leadData.detail ||
            leadData.message ||
            mailData.message ||
            'Unable to submit your enquiry. Please try again.'
        });
      }

    } catch (err) {
      console.error('Contact form submission error:', err);

      setStatus({
        loading: false,
        success: false,
        message: 'Unable to reach the server. Please try again later.'
      });
    }
  };


  return (
    <form onSubmit={handleSubmit} noValidate>
      {status.message && (
        <div class={`form-status ${status.success ? 'success' : 'error'}`}>
          {status.success ? '✓ ' : '✕ '}
          {status.message}
        </div>
      )}

      <div class="form-row">
        <div class="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Sam Alexander"
            value={formData.name}
            onChange={handleChange}
            class={errors.name ? 'form-input-error' : ''}
          />
          {errors.name && <span class="form-error">{errors.name}</span>}
        </div>

        <div class="form-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="olivia@untitledui.com"
            value={formData.email}
            onChange={handleChange}
            class={errors.email ? 'form-input-error' : ''}
          />
          {errors.email && <span class="form-error">{errors.email}</span>}
        </div>
      </div>

      <div class="form-group">
        <label>Contact Number (Qatar)</label>
        <div class={`phone-input-group ${errors.phone ? 'form-input-error' : ''}`}>
          <div class="phone-prefix">
            <span class="phone-flag" aria-hidden="true">🇶🇦</span>
            <span>+974</span>
          </div>
          <input
            type="tel"
            name="phone"
            placeholder="3312 3456"
            value={formData.phone}
            onChange={handlePhoneChange}
            maxLength={8}
            autoComplete="tel-local"
            inputMode="numeric"
          />
        </div>
        {errors.phone && <span class="form-error">{errors.phone}</span>}
      </div>

      <div class="form-group">
        <label>Message</label>
        <textarea
          name="message"
          placeholder="Write A Message..."
          value={formData.message}
          onChange={handleChange}
          class={errors.message ? 'form-input-error' : ''}
        ></textarea>
        {errors.message && <span class="form-error">{errors.message}</span>}
      </div>

      <div style={{ textAlign: 'right', marginTop: '20px' }}>
        <button
          type="submit"
          class="btn btn-dark"
          style={{ padding: '16px 84px', fontSize: '14px' }}
          disabled={status.loading}
        >
          {status.loading ? 'Sending Message...' : 'Send Message'}
        </button>
      </div>
    </form>
  );
}
