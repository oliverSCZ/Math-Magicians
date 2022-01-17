import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';
import NavBar from './components/NavBar';

const App = () => (
  <div className="App">
    <NavBar />
    <Routes>
      <Route exact path="/calc" element={<Calculator />} />
      <Route exact path="/" element={<Home />} />
      <Route exact path="/quote" element={<Quote />} />
    </Routes>
  </div>
);

export default App;
