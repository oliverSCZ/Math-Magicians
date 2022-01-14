import React, { useState } from 'react';
import './App.css';
import Calculator from './components/Calculator';
import calculate from './logic/calculate';

const App = () => {
  const [state, setState] = useState({
    total: 0,
    next: 0,
  });
  const handleClick = (e) => {
    setState((old) => calculate(old, e.target.innerText));
  };

  const { total, next } = state;
  const calcStates = { total, next };
  return (
    <div className="App">
      <Calculator handleClick={handleClick} calcStates={calcStates} />
    </div>
  );
};

export default App;
