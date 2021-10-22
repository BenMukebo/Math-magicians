import React, { Component } from 'react';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: '',
      operation: '',
    };
  }

  handleCalculate = (value) => this.setState((obj) => calculate(obj, value.target.textContent))

  render() {
    const { total, next, operation } = this.state;
    return (
      <section className="items-container">
        <div className="result">
          <div className=" flex-center input">
            {`
          ${total || operation || next
              ? `${total || ''} ${operation || ''} ${next || ''}`
              : '0'}
            `}
          </div>
        </div>
        <ul className="items-container">
          <li className="flex-center keyItem">
            <button className="btn" onClick={this.handleCalculate} type="button">AC</button>
            <button className="btn" onClick={this.handleCalculate} type="button">+/-</button>
            <button className="btn" onClick={this.handleCalculate} type="button">&#x25;</button>
            <button className="btn" onClick={this.handleCalculate} type="button">&#xf7;</button>
          </li>
          <li className="flex-center keyItem">
            <button className="btn" onClick={this.handleCalculate} type="button">7</button>
            <button className="btn" onClick={this.handleCalculate} type="button">8</button>
            <button className="btn" onClick={this.handleCalculate} type="button">9</button>
            <button className="btn" onClick={this.handleCalculate} type="button">x</button>
          </li>
          <li className="flex-center keyItem">
            <button className="btn" onClick={this.handleCalculate} type="button">4</button>
            <button className="btn" onClick={this.handleCalculate} type="button">5</button>
            <button className="btn" onClick={this.handleCalculate} type="button">6</button>
            <button className="btn" onClick={this.handleCalculate} type="button">-</button>
          </li>
          <li className="flex-center keyItem">
            <button className="btn" onClick={this.handleCalculate} type="button">1</button>
            <button className="btn" onClick={this.handleCalculate} type="button">2</button>
            <button className="btn" onClick={this.handleCalculate} type="button">3</button>
            <button className="btn" onClick={this.handleCalculate} type="button">+</button>
          </li>
          <li className="flex-center keyItem">
            <button className="btn" onClick={this.handleCalculate} type="button">0</button>
            <button className="btn" onClick={this.handleCalculate} type="button">.</button>
            <button className="btn" onClick={this.handleCalculate} type="button">=</button>
          </li>
        </ul>
      </section>
    );
  }
}
export default Calculator;

// const calculatorData = [
//   [
//     { className: 'btn', name: '+/-' },
//     { className: 'btn', name: '%' },
//     { className: 'btn', name: '÷' },
//   ],
//   [
//     { className: 'btn', name: '7' },
//     { className: 'btn', name: '8' },
//     { className: 'btn', name: '9' },
//     { className: 'btn', name: 'x' },
//   ],
//   [
//     { className: 'btn', name: '4' },
//     { className: 'btn', name: '5' },
//     { className: 'btn', name: '6' },
//     { className: 'btn', name: '-' },
//   ],
//   [
//     { className: 'btn', name: '1' },
//     { className: 'btn', name: '2' },
//     { className: 'btn', name: '3' },
//     { className: 'btn', name: '+' },
//   ],
//   [
//     { className: 'btn', name: '0' },
//     { className: 'btn', name: '.' },
//     { className: 'btn', name: '=' },
//   ],
// ];
