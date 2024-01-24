import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import ModalC from './ModalC';
import '../App.css';

const Problem2 = () => {
  const [showModalC, setShowModalC] = useState(false);
  const navigate = useNavigate();

  const openModalC = () => {
    setShowModalC(true);
    // Use navigate to update the URL when opening the modal
    navigate('/problem-2/modal-c');
  };

  const closeModalC = () => {
    setShowModalC(false);
    // Use navigate to go back to the previous URL when closing the modal
    navigate(-1);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-1">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>
        <div className="d-flex justify-content-center gap-3">
          <Link to="/problem-2/all-contacts" className="btn btn-lg btn-outline-primary">
            All Contacts
          </Link>
          <Link to="/problem-2/us-contacts" className="btn btn-lg btn-outline-warning">
            US Contacts
          </Link>
          <button
            className="btn btn-lg btn-outline-primary"
            style={{
              backgroundColor: 'white',
              border: '2px solid #46139f',
              color: '#46139f',
            }}
            onClick={openModalC}
          >
            Open Modal C
          </button>
        </div>
        <Routes>
          <Route path="/problem-2/modal-c" element={<ModalC onClose={closeModalC} />} />
        </Routes>
      </div>
    </div>
  );
};

export default Problem2;
