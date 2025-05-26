import React, { useRef, useState } from 'react'
import { FiSend } from "react-icons/fi"
import emailjs from '@emailjs/browser'
import { useTranslation } from 'react-i18next'
import './contact.scss'
import { ValidationForm } from '@services/import'

function Contact() {

  const { t } = useTranslation('translation')

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
          setSubmissionMessage(t('contact.form.success')); 
        },
        (error) => {
          setSubmissionMessage(t('contact.form.error')); 
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
      <h2>{t('contact.title')}</h2>
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
              <label htmlFor="name">{t('contact.form.name')}</label>
              <input type="text" name="name" id="name"  value={formData.name} onChange={handleChange} autocomplete="given-name" />
              {errors.name && <span className={`error ${errors.name ? 'error-active' : ''}`}>{errors.name}</span>}
            </div>
            <div className='w-subject'>
              <label htmlFor="subject">{t('contact.form.subject')}</label>
              <input type="text" name="subject" id="subject"  value={formData.subject} onChange={handleChange} />
              {errors.subject && <span className={`error ${errors.subject ? 'error-active' : ''}`}>{errors.subject}</span>}
            </div>
          </div>
          <div className='w-email'>
            <label htmlFor="user_email">{t('contact.form.email')}</label>
            <input type="email" name="user_email" id="user_email"  value={formData.user_email} onChange={handleChange} />
            {errors.email && <span className={`error ${errors.email ? 'error-active' : ''}`}>{errors.email}</span>}
          </div>

          <div className='w-message'>
            <label htmlFor="message">{t('contact.form.message')}</label>
            <textarea name="message" id="message"  value={formData.message} onChange={handleChange} />
            {errors.message && <span className={`error ${errors.message ? 'error-active' : ''}`}>{errors.message}</span>}
          </div>

          <button type="submit">{t('contact.form.button')}</button>
        </form>
      )}
    </div>
  )
}

export default Contact;