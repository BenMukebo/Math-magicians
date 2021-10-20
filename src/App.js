import React, { Component } from 'react';
import Calculator from './components/Calculator';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main className="container">
        <Calculator />
      </main>
    );
  }
}

export default App;
