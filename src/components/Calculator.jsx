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
    <>
      {/* <h2>Let's do some math!</h2> */}
      <section className="items-container">
        <div className="flex-center result">
          <div className="input">
            {`
          ${state.total || state.operation || state.next
              ? `${state.total || ''} ${state.operation || ''} ${state.next || ''}`
              : '0'}
            `}
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
    </>
  );
};
export default Calculator;
