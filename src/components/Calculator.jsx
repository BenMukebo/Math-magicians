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

  // const { total, next, operation } = state;

  return (
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
        {/* <li className="flex-center keyItem">
          <button className="btn" onClick={handleKeyPress} type="button">AC</button>
          <button className="btn" onClick={handleKeyPress} type="button">+/-</button>
          <button className="btn" onClick={handleKeyPress} type="button">&#x25;</button>
          <button className="btn" onClick={handleKeyPress} type="button">&#xf7;</button>
        </li>
        <li className="flex-center keyItem">
          <button className="btn" onClick={handleKeyPress} type="button">7</button>
          <button className="btn" onClick={handleKeyPress} type="button">8</button>
          <button className="btn" onClick={handleKeyPress} type="button">9</button>
          <button className="btn" onClick={handleKeyPress} type="button">x</button>
        </li>
        <li className="flex-center keyItem">
          <button className="btn" onClick={handleKeyPress} type="button">4</button>
          <button className="btn" onClick={handleKeyPress} type="button">5</button>
          <button className="btn" onClick={handleKeyPress} type="button">6</button>
          <button className="btn" onClick={handleKeyPress} type="button">-</button>
        </li>
        <li className="flex-center keyItem">
          <button className="btn" onClick={handleKeyPress} type="button">1</button>
          <button className="btn" onClick={handleKeyPress} type="button">2</button>
          <button className="btn" onClick={handleKeyPress} type="button">3</button>
          <button className="btn" onClick={handleKeyPress} type="button">+</button>
        </li>
        <li className="flex-center keyItem">
          <button className="btn" onClick={handleKeyPress} type="button">0</button>
          <button className="btn" onClick={handleKeyPress} type="button">.</button>
          <button className="btn" onClick={handleKeyPress} type="button">=</button>
        </li> */}
      </ul>
    </section>
  );
};
export default Calculator;
