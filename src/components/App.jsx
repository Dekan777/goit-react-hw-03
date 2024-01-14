import './App.css';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Phonebook } from './Phonebook/Phonebook';
import { ContactList } from './ContactList/ContactList';
import { SearchBox } from './SearchBox/SearchBox';
import { InitialContacts } from './data/InitialContacts';
import { ContactForm } from './ContactForm/ContactForm';

export const App = () => {
  const [searchValue, setSearchValue] = useState('');

  const [contacts, setContacts] = useState(InitialContacts);
  const handleSearchChange = evt => {
    setSearchValue(evt.target.value);
  };

  const filteredContacts = contacts.filter(
    contact => contact.name && contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleSubmit = (values, actions) => {
    const newObjectId = nanoid();
    const newContact = {
      Id: newObjectId,
      ...values,
    };

    setContacts([...contacts, newContact]);
    actions.resetForm();
  };

  return (
    <div>
      <li>
        <ContactForm handleSubmitForm={handleSubmit} />
      </li>

      <li>
        <Phonebook text="Phonebook" />
      </li>

      <li>
        <SearchBox value={searchValue} change={handleSearchChange} />
      </li>

      <li>
        <ContactList value={filteredContacts} />
      </li>
    </div>
  );
};
