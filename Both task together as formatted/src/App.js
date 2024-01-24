import { Routes, Route,useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import Problem1 from "./components/Problem-1.js";
import Menu from "./components/Menu.js";
import Problem2 from "./components/Problem-2.js";
import Index from "./components/Index.js";
import ModalA from './components/ModalA';
import ModalB from './components/ModalB';
import ModalC from './components/ModalC.js';
import './App.css';

function App() {
  const [showModalC, setShowModalC] = useState(false);
  const navigate = useNavigate();

  const openModalC = () => {
    setShowModalC(true);
    // Use navigate to update the URL when opening the modal
    navigate("/problem-2/modal-c");
  };

  const closeModalC = () => {
    setShowModalC(false);
    // Use navigate to go back to the previous URL when closing the modal
    navigate(-1);
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/" element={<Menu />}>
          <Route path="problem-1" element={<Problem1 />} />
          <Route path="problem-2" element={<Problem2 />}/>
          <Route path="/problem-2/all-contacts" element={<ModalA />} />
        <Route path="/problem-2/us-contacts" element={<ModalB />} />
        <Route path="/problem-2/modal-c" element={<ModalC onClose={closeModalC} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
