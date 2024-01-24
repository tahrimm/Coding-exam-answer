// ModalC.js
import React from 'react';

const ModalC = ({ onClose }) => {
  // Dummy data
  const contacts = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
    // Add more dummy data as needed
  ];

  return (
    <div className="modal">
      <h2>All Contacts</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <strong>{contact.name}</strong> - {contact.email}
          </li>
        ))}
      </ul>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ModalC;
