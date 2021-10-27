import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header className="header">
    <nav className="navbar flex-center">
      <div className="header-title">
        <h1>
          Math
          <span> magicians </span>
        </h1>
      </div>
      <ul className="flex-center">
        <li className="nav-item">
          <Link className="nav-item-link active" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-item-link" to="/calculator">
            Calculator
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-item-link" to="/quote">
            Quotes
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);
export default Navbar;
