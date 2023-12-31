import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from './App.module.css';
const CONTACTS = 'contacts';

const initialContacts = [
  { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
  { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
  { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
  { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem(CONTACTS)) ?? initialContacts
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem(CONTACTS, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    if (
      contacts.some(
        value => value.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
    } else {
      setContacts(oldState => {
        const list = [...oldState];

        list.push({
          id: nanoid(),
          name: name,
          number: number,
        });

        return list;
      });
    }
  };

  const contactsFilter = () => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return filteredContacts;
  };
  const delContact = id => {
    const filtred = contacts.filter(item => item.id !== id);

    setContacts(filtred);
  };

  const handleChangeInput = event => {
    setFilter(event.currentTarget.value);
  };
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>

      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>

      <Filter filter={filter} handleChangeInput={handleChangeInput} />

      <ContactList delContact={delContact} contacts={contactsFilter()} />
    </div>
  );
};