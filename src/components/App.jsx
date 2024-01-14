import './App.css';
import { useState } from 'react';
// import { useId } from 'react';
import { nanoid } from 'nanoid';
import { Phonebook } from './Phonebook/Phonebook';
import { ContactList } from './ContactList/ContactList';
import { SearchBox } from './SearchBox/SearchBox';
import { InitialContacts } from './data/InitialContacts';
import { ContactForm } from './ContactForm/ContactForm';

export const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const handleSearchChange = evt => {
    setSearchValue(evt.target.value);
  };

  const handleSubmit = (values, actions) => {
    const newObjectId = nanoid();

    // Create a new contact with the updated values
    const newContact = {
      Id: newObjectId,
      ...values,
    };

    // Update the contacts state with the new contact
    setContacts(prevContacts => [...prevContacts, newContact]);

    // Reset the form
    actions.resetForm();
  };
  const [contacts, setContacts] = useState(InitialContacts);

  const filteredContacts = contacts.filter(
    contact => contact.name && contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  // console.log(contacts);
  console.log('refer', filteredContacts);
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
