import React, { useState } from 'react'; // Importujemy useState z React

import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

// Komponent ContactForm
const ContactForm = ({ onAddContact }) => {
  // Zamiast używać komponentu klasowego, korzystamy teraz z hooka useState
  const [name, setName] = useState(''); // Inicjalizujemy stan name pustym stringiem
  const [number, setNumber] = useState(''); // Inicjalizujemy stan number pustym stringiem

  const handleChange = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newContact = { name, number };
    onAddContact(newContact);
    setName(''); // Czyścimy stan name po dodaniu kontaktu
    setNumber(''); // Czyścimy stan number po dodaniu kontaktu
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        placeholder="Enter name"
        required
        className={styles.input}
      />
      <input
        type="tel"
        name="number"
        value={number}
        onChange={handleChange}
        placeholder="Enter number"
        required
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
