import React from 'react';
import { Routes, Route } from 'react-router-dom';


import HomePage from './views/HomePage/HomePage';
import ContactsPage from './views/ContactsPage/ContactsPage';
import AboutPage from './views/AboutPage/AboutPage';
import './App.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </div>
  );
}

export default App;
