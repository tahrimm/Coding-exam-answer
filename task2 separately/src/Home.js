import React, { useState } from 'react';
import { Routes, Route, Link, Outlet, useNavigate } from 'react-router-dom';
import ModalA from './ModalA';
import ModalB from './ModalB';
import ModalC from './ModalC';
import './App.css';

const Home = () => {
  const [showModalC, setShowModalC] = useState(false);
  const navigate = useNavigate();

  const openModalC = () => {
    setShowModalC(true);
    // Use navigate to update the URL when opening the modal
    navigate('/modal-c');
  };

  const closeModalC = () => {
    setShowModalC(false);
    // Use navigate to go back to the previous URL when closing the modal
    navigate(-1);
  };

  return (
    <div className="home-container">
      <div className="action-button-container">
        <Link to="/all-contacts" className="action-button" style={{ color: '#46139f' }}>
          All Contacts
        </Link>
        <Link to="/us-contacts" className="action-button" style={{ color: '#ff7f50' }}>
          US Contacts
        </Link>
        <button className="action-button" style={{
          backgroundColor: 'white',
          border: '2px solid #46139f',
          color: '#46139f', // Optional: Set text color to match the border color
        }} onClick={openModalC}>
          close
        </button>
      </div>

      <Routes>
        <Route path="/all-contacts" element={<ModalA />} />
        <Route path="/us-contacts" element={<ModalB />} />
        <Route path="/modal-c" element={<ModalC onClose={closeModalC} />} />
      </Routes>
    </div>
  );
};

export default Home;
