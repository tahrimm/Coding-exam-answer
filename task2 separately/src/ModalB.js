import React from 'react';
import ContactList from './ContactList';

const ModalB = () => {
  return (
    <div className="modal-container">
      <h2>Modal B</h2>
      <ContactList apiUrl="https://contact.mediusware.com/api/country-contacts/united%20states/" showOnlyUS={true} />
    </div>
  );
};

export default ModalB;
