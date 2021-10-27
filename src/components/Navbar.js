import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header className="header">
    <nav className="navbar">
      <div className="header-title">
        <h1 className=""> Math magicians </h1>
      </div>
      <ul className="">
        <li className="nav-item">
          <Link className="nav-item-link active" to="/">
            Home
            <span className="">(current)</span>
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
