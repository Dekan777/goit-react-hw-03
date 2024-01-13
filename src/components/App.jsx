import './App.css';
// import { useState } from 'react';
import { Phonebook } from './Phonebook/Phonebook';
import { ContactList } from './ContactList/ContactList';
export const App = () => {
  // const [values, setValues] = useState([
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ]);
  const values = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  return (
    <div>
      <li>
        <Phonebook text="Phonebook" />
      </li>

      {/* <ContactForm /> */}
      {/* <SearchBox /> */}
      <ContactList value={values} />
    </div>
  );
};
