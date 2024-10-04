import React, { useRef, useState } from 'react';
import { FiSend } from "react-icons/fi";
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';  // Importing useTranslation
import './contact.scss';
import { ValidationForm } from '@services/import';

function Contact() {
  const { t } = useTranslation('translation');  // Hook for translations
  const form = useRef();
  const [errors, setErrors] = useState({ name: '', email: '', subject: '', message: '' });
  const [formData, setFormData] = useState({ name: '', user_email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: ValidationForm(name, value) });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const nameError = ValidationForm('name', formData.name);
    const emailError = ValidationForm('user_email', formData.user_email);
    const subjectError = ValidationForm('subject', formData.subject);
    const messageError = ValidationForm('message', formData.message);

    if (nameError || emailError || subjectError || messageError) {
      setErrors({ name: nameError, email: emailError, subject: subjectError, message: messageError });
      return;
    }

    emailjs
      .sendForm('service_lyrzpu8', 'template_vql4j5r', form.current, 'U6Gv1xkKJlT_AlOqx')
      .then(
        () => {
          setIsSubmitted(true);
          setSubmissionMessage(t('contact.form.success'));  // Translated success message
        },
        (error) => {
          setSubmissionMessage(t('contact.form.error'));  // Translated error message
          console.log('FAILED...', error.text);
        }
      );
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({ name: '', user_email: '', subject: '', message: '' });
    setErrors({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className='contactContainer'>
      <h2>{t('contact.title')}</h2> {/* Translated title */}
      {isSubmitted ? (
        <div className='w-submissionMessages'>
          <div className='w-success'>
            <p className='success'>{submissionMessage}</p>
            <FiSend className='sendIcon' />
          </div>
          <button onClick={handleReset} className="resetButton">{t('contact.form.sendNewMessage')}</button>
        </div>
      ) : (
        <form className='w-form' ref={form} onSubmit={sendEmail}>
          <div className='w-nameAndSubject'>
            <div className='w-name'>
              <label htmlFor="name" className="visually-hidden">{t('contact.form.name')}</label>
              <input type="text" name="name" id="name" placeholder={t('contact.form.name')} value={formData.name} onChange={handleChange} />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className='w-subject'>
              <label htmlFor="subject" className="visually-hidden">{t('contact.form.subject')}</label>
              <input type="text" name="subject" id="subject" placeholder={t('contact.form.subject')} value={formData.subject} onChange={handleChange} />
              {errors.subject && <span className="error">{errors.subject}</span>}
            </div>
          </div>
          <label htmlFor="email" className="visually-hidden">{t('contact.form.email')}</label>
          <input type="email" name="user_email" id="email" placeholder={t('contact.form.email')} value={formData.user_email} onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}

          <label htmlFor="message" className="visually-hidden">{t('contact.form.message')}</label>
          <textarea name="message" id="message" placeholder={t('contact.form.message')} value={formData.message} onChange={handleChange} />
          {errors.message && <span className="error">{errors.message}</span>}

          <button type="submit">{t('contact.form.button')}</button> {/* Translated button */}
        </form>
      )}
    </div>
  );
}

export default Contact;
