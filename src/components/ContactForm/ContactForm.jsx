import { useState } from 'react';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';

export const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');


  const handleInputChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  return (
    <>
      <form
        className={css.formstyle}
        onSubmit={evt => {
          evt.preventDefault();

          addContact({ name, number });
          setName('');
          setNumber('');
        }}
      >
        <label className={css.label}>
          Name
          <br />
          <input
            className={css.input}
            onChange={handleInputChange}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <br />
        <label className={css.label}>
          Number
          <br />
          <input
            className={css.input}
            onChange={handleInputChange}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <br />
        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};



ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};