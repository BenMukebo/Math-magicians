import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: '',
    operation: '',
  });

  const keyBtns = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  //  handleKeyPress = (event) => this.setState((obj) => calculate(obj, event.target.textContent));
  const handleKeyPress = (event) => {
    const calculator = calculate(state, event.target.textContent);
    setState({ ...state, ...calculator });
  };

  return (
    <div className=" section flex-center">
      <h2 className="second-title">
        Let&apos;s do some Math
        <span>!</span>
      </h2>
      <section className="calculator-section">
        <div className="flex-center result">
          <div className="input" role="none">
            {state.total}
            {state.operation}
            {state.next}
          </div>
        </div>
        <ul className="items-container">
          {keyBtns.map((keys) => (
            <li className="flex-center keyItem" key={keys}>
              {keys.map((key) => (
                <button
                  className="btn"
                  type="button"
                  onClick={handleKeyPress}
                  key={key}
                >
                  {key}
                </button>
              ))}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
export default Calculator;
