/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './calculator.css';
import calculate from '../logic/calculate';
import '../logic/operate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((previousState) => calculate(previousState, e.target.innerText));
  }

  render() {
    let val = 0;
    const { total, next } = this.state;
    if (next) {
      val = next;
    } else if (total) {
      val = total;
    }

    return (
      <div className="container">
        <input
          className="grid-item display"
          placeholder="0"
          value={val}
          readOnly
        />
        <button
          type="button"
          className="grid-item AC"
          onClick={this.handleClick}
        >
          AC
        </button>
        <button
          type="button"
          className="grid-item operations"
          onClick={this.handleClick}
        >
          +/-
        </button>
        <button
          type="button"
          className="grid-item procentage"
          onClick={this.handleClick}
        >
          %
        </button>
        <button
          type="button"
          className="grid-item divide operation"
          onClick={this.handleClick}
        >
          ÷
        </button>
        <button
          type="button"
          className="grid-item seven"
          onClick={this.handleClick}
        >
          7
        </button>
        <button
          type="button"
          className="grid-item eight"
          onClick={this.handleClick}
        >
          8
        </button>
        <button
          type="button"
          className="grid-item nine"
          onClick={this.handleClick}
        >
          9
        </button>
        <button
          type="button"
          className="grid-item multiply operation"
          onClick={this.handleClick}
        >
          ×
        </button>
        <button
          type="button"
          className="grid-item four"
          onClick={this.handleClick}
        >
          4
        </button>
        <button
          type="button"
          className="grid-item five"
          onClick={this.handleClick}
        >
          5
        </button>
        <button
          type="button"
          className="grid-item six"
          onClick={this.handleClick}
        >
          6
        </button>
        <button
          type="button"
          className="grid-item minus operation"
          onClick={this.handleClick}
        >
          -
        </button>
        <button
          type="button"
          className="grid-item one"
          onClick={this.handleClick}
        >
          1
        </button>
        <button
          type="button"
          className="grid-item two"
          onClick={this.handleClick}
        >
          2
        </button>
        <button
          type="button"
          className="grid-item three"
          onClick={this.handleClick}
        >
          3
        </button>
        <button
          type="button"
          className="grid-item plus operation"
          onClick={this.handleClick}
        >
          +
        </button>
        <button
          type="button"
          className="grid-item zero"
          onClick={this.handleClick}
        >
          0
        </button>
        <button
          type="button"
          className="grid-item period"
          onClick={this.handleClick}
        >
          .
        </button>
        <button
          type="button"
          className="grid-item equal operation"
          onClick={this.handleClick}
        >
          =
        </button>
      </div>
    );
  }
}

export default Calculator;
