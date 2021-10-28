import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';

import './css/App.css';

const App = () => (
  <Router>
    <Navbar />
    <main className="container">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Calculator">
          <Calculator />
        </Route>
        <Route path="/Quote">
          <Quote />
        </Route>
      </Switch>
    </main>
  </Router>
);

export default App;
