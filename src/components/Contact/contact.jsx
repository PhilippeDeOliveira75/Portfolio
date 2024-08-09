import React, { useRef, useState } from 'react';
import { FiSend } from "react-icons/fi";
import emailjs from '@emailjs/browser';
import './contact.scss';
import { ValidationForm } from '@services/import';

function Contact() {
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
          setSubmissionMessage('Message sent successfully');
        },
        (error) => {
          setSubmissionMessage("Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer.");
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
      <h2>CONTACT</h2>
      {isSubmitted ? (
        <div className='w-submissionMessages'>
          <div className='w-success'>
            <p className='success'>{submissionMessage}</p>
            <FiSend className='sendIcon' />
          </div>
          <button onClick={handleReset} className="resetButton">Send new message</button>
        </div>
      ) : (
        <form className='w-form' ref={form} onSubmit={sendEmail}>
          <div className='w-nameAndSubject'>
            <div className='w-name'>
              <label htmlFor="name" className="visually-hidden">Name</label>
              <input type="text" name="name" id="name" placeholder="Name" value={formData.name} onChange={handleChange} />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className='w-subject'>
              <label htmlFor="subject" className="visually-hidden">Subject</label>
              <input type="text" name="subject" id="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
              {errors.subject && <span className="error">{errors.subject}</span>}
            </div>
          </div>
          <label htmlFor="email" className="visually-hidden">Email</label>
          <input type="email" name="user_email" id="email" placeholder="Email" value={formData.user_email} onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}

          <label htmlFor="message" className="visually-hidden">Message</label>
          <textarea name="message" id="message" placeholder="Message" value={formData.message} onChange={handleChange} />
          {errors.message && <span className="error">{errors.message}</span>}

          <button type="submit">Send</button>
        </form>
      )}
    </div>
  );
}

export default Contact;
