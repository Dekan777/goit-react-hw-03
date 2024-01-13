import './App.css';
// import { useState } from 'react';
import { Phonebook } from './Phonebook/Phonebook';
export const App = () => {
  return (
    <div>
      <Phonebook text="Phonebook" />
      {/* <ContactForm />
      <SearchBox />
      <ContactList /> */}
    </div>
  );
};
