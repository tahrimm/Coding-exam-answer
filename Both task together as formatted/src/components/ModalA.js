import React from 'react';
import ContactList from './ContactList';

const ModalA = () => {
  return (
    <div className="modal-container">
      <h2>Modal A</h2>
      <ContactList apiUrl="https://contact.mediusware.com/api/contacts/" showOnlyUS={false} />
    </div>
  );
};

export default ModalA;
