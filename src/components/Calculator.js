import './calculator.css';
import '../logic/operate';
import PropTypes from 'prop-types';

const Calculator = (props) => {
  const { calcStates, handleClick } = props;
  const { total, next } = calcStates;
  let val = 0;
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
      <button type="button" className="grid-item AC" onClick={handleClick}>
        AC
      </button>
      <button
        type="button"
        className="grid-item operations"
        onClick={handleClick}
      >
        +/-
      </button>
      <button
        type="button"
        className="grid-item procentage"
        onClick={handleClick}
      >
        %
      </button>
      <button
        type="button"
        className="grid-item divide operation"
        onClick={handleClick}
      >
        ÷
      </button>
      <button type="button" className="grid-item seven" onClick={handleClick}>
        7
      </button>
      <button type="button" className="grid-item eight" onClick={handleClick}>
        8
      </button>
      <button type="button" className="grid-item nine" onClick={handleClick}>
        9
      </button>
      <button
        type="button"
        className="grid-item multiply operation"
        onClick={handleClick}
      >
        ×
      </button>
      <button type="button" className="grid-item four" onClick={handleClick}>
        4
      </button>
      <button type="button" className="grid-item five" onClick={handleClick}>
        5
      </button>
      <button type="button" className="grid-item six" onClick={handleClick}>
        6
      </button>
      <button
        type="button"
        className="grid-item minus operation"
        onClick={handleClick}
      >
        -
      </button>
      <button type="button" className="grid-item one" onClick={handleClick}>
        1
      </button>
      <button type="button" className="grid-item two" onClick={handleClick}>
        2
      </button>
      <button type="button" className="grid-item three" onClick={handleClick}>
        3
      </button>
      <button
        type="button"
        className="grid-item plus operation"
        onClick={handleClick}
      >
        +
      </button>
      <button type="button" className="grid-item zero" onClick={handleClick}>
        0
      </button>
      <button type="button" className="grid-item period" onClick={handleClick}>
        .
      </button>
      <button
        type="button"
        className="grid-item equal operation"
        onClick={handleClick}
      >
        =
      </button>
    </div>
  );
};

Calculator.propTypes = {
  calcStates: PropTypes.instanceOf(Object).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Calculator;
