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
      <ul className="items-container">
        <li className="flex-center result">
          <div className="input">
            {`
          ${total || operation || next
              ? `${total || ''} ${operation || ''} ${next || ''}`
              : '0'}
            `}
          </div>
        </li>
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
    );
  }
}
export default Calculator;
