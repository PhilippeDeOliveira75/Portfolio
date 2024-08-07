import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.scss';

function Contact() {
  const form = useRef();
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [formData, setFormData] = useState({ name: '', user_email: '', message: '' });

  const validateInput = (inputName, value) => {
    let errorMessage = '';

    if (inputName === 'name') {
      const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s-]+$/;

      if (value.trim() === '') {
        errorMessage = 'Ce champ doit être rempli.';
      } else if (!nameRegex.test(value)) {
        errorMessage = 'Ce champ ne doit contenir que des caractères alphabétiques';
      } else if (value.length < 2) {
        errorMessage = 'Ce champ doit contenir au moins 2 caractères.';
      }
    } else if (inputName === 'user_email') {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      if (!emailRegex.test(value)) {
        errorMessage = 'Veuillez entrer une adresse e-mail valide.';
      }
    } else if (inputName === 'message') {
      if (value.length > 300) {
        errorMessage = 'Le message ne doit pas dépasser 300 caractères.';
      }
    }

    return errorMessage;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: validateInput(name, value) });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const nameError = validateInput('name', formData.name);
    const emailError = validateInput('user_email', formData.user_email);
    const messageError = validateInput('message', formData.message);

    if (nameError || emailError || messageError) {
      setErrors({ name: nameError, email: emailError, message: messageError });
      return;
    }

    emailjs
      .sendForm('service_lyrzpu8', 'template_vql4j5r', form.current, {
        publicKey: 'U6Gv1xkKJlT_AlOqx',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className='contactContainer'>
      <h2>CONTACT</h2>
      <form className='w-form' ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span className="error">{errors.name}</span>}

        <label>Email</label>
        <input
          type="email"
          name="user_email"
          id="email"
          value={formData.user_email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <label>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <span className="error">{errors.message}</span>}

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
