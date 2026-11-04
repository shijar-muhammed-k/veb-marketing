import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function ContactForm({ onSuccess, isModal = false }) {
  const { t, isRTL } = useLanguage();
  const formT = t.contact.form;

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
      newErrors.name = formT.validation.nameRequired;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = formT.validation.nameMin;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !formData.email.trim()) {
      newErrors.email = formT.validation.emailRequired;
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = formT.validation.emailInvalid;
    }

    // Qatar Phone validation (8 digits)
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone) {
      newErrors.phone = formT.validation.phoneRequired;
    } else if (cleanPhone.length !== 8) {
      newErrors.phone = formT.validation.phoneDigits;
    }

    // Message validation
    if (!formData.message || !formData.message.trim()) {
      newErrors.message = formT.validation.messageRequired;
    } else if (formData.message.trim().length < 5) {
      newErrors.message = formT.validation.messageMin;
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
        import.meta.env.VITE_LEADS_API_URL ||
        (import.meta.env.DEV ? '/api/accounts/leads/' : 'https://dev.vebqatar.com/api/accounts/leads/');
      const mailApiUrl =
        import.meta.env.VITE_API_URL || 'https://vebqatar.com/send-mail';

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
          message: formT.successMessage
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
          message: formT.errorSavedNoMail
        });
      } else if (!leadSuccess && mailSuccess) {
        setStatus({
          loading: false,
          success: false,
          message: formT.errorMailNoSave
        });
      } else {
        setStatus({
          loading: false,
          success: false,
          message:
            leadData.detail ||
            leadData.message ||
            mailData.message ||
            formT.errorGeneric
        });
      }
    } catch (err) {
      console.error('Contact form submission error:', err);

      setStatus({
        loading: false,
        success: false,
        message: formT.errorNetwork
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      {status.message && (
        <div className={`form-status ${status.success ? 'success' : 'error'}`}>
          {status.success ? '✓ ' : '✕ '}
          {status.message}
        </div>
      )}

      <div className="form-row">
        <div className="form-group">
          <label>{formT.nameLabel}</label>
          <input
            type="text"
            name="name"
            placeholder={formT.namePlaceholder}
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'form-input-error' : ''}
          />
          {errors.name && <span className="form-error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label>{formT.emailLabel}</label>
          <input
            type="email"
            name="email"
            placeholder={formT.emailPlaceholder}
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'form-input-error' : ''}
          />
          {errors.email && <span className="form-error">{errors.email}</span>}
        </div>
      </div>

      <div className="form-group">
        <label>{formT.phoneLabel}</label>
        <div className={`phone-input-group ${errors.phone ? 'form-input-error' : ''}`}>
          <div className="phone-prefix">
            <span className="phone-flag" aria-hidden="true">🇶🇦</span>
            <span>+974</span>
          </div>
          <input
            type="tel"
            name="phone"
            placeholder={formT.phonePlaceholder}
            value={formData.phone}
            onChange={handlePhoneChange}
            maxLength={8}
            autoComplete="tel-local"
            inputMode="numeric"
            dir="ltr"
          />
        </div>
        {errors.phone && <span className="form-error">{errors.phone}</span>}
      </div>

      <div className="form-group">
        <label>{formT.messageLabel}</label>
        <textarea
          name="message"
          placeholder={formT.messagePlaceholder}
          value={formData.message}
          onChange={handleChange}
          className={errors.message ? 'form-input-error' : ''}
        ></textarea>
        {errors.message && <span className="form-error">{errors.message}</span>}
      </div>

      <div style={{ textAlign: isRTL ? 'left' : 'right', marginTop: '20px' }}>
        <button
          type="submit"
          className="btn btn-dark"
          style={{ padding: '16px 84px', fontSize: '14px' }}
          disabled={status.loading}
        >
          {status.loading ? formT.submittingBtn : formT.submitBtn}
        </button>
      </div>
    </form>
  );
}
