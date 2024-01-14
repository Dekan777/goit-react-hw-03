import './App.css';
import { useState } from 'react';
import { useId } from 'react';
import { Phonebook } from './Phonebook/Phonebook';
import { ContactList } from './ContactList/ContactList';
// import { SearchBox } from './SearchBox/SearchBox';

export const App = () => {
  const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts] = useState(initialContacts);
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = evt => {
    setSearchValue(evt.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
      <Phonebook text="Phonebook" />

      <div>
        <input type="text" id={useId()} value={searchValue} onChange={handleSearchChange} />
      </div>

      <div>
        <ContactList value={filteredContacts} />
      </div>
    </div>
  );
};
