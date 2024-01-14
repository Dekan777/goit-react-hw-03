import './App.css';
import { useState } from 'react';
// import { useId } from 'react';
import { Phonebook } from './Phonebook/Phonebook';
import { ContactList } from './ContactList/ContactList';
import { SearchBox } from './SearchBox/SearchBox';
import { InitialContacts } from './data/InitialContacts';

export const App = () => {
  const [contacts] = useState(InitialContacts);
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = evt => {
    setSearchValue(evt.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
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
