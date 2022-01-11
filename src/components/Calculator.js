/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './calculator.css';

class Calculator extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <div className="grid-item display">0</div>
          <div className="grid-item AC">AC</div>
          <div className="grid-item operations">+/-</div>
          <div className="grid-item procentage">%</div>
          <div className="grid-item divide operation">÷</div>
          <div className="grid-item seven">7</div>
          <div className="grid-item eight">8</div>
          <div className="grid-item nine">9</div>
          <div className="grid-item multiply operation">×</div>
          <div className="grid-item four">4</div>
          <div className="grid-item five">5</div>
          <div className="grid-item six">6</div>
          <div className="grid-item minus operation">-</div>
          <div className="grid-item one">1</div>
          <div className="grid-item two">2</div>
          <div className="grid-item three">3</div>
          <div className="grid-item plus operation">+</div>
          <div className="grid-item zero">0</div>
          <div className="grid-item period">.</div>
          <div className="grid-item equal operation">=</div>
        </div>
      </div>
    );
  }
}

export default Calculator;
