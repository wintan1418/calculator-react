import { Link } from 'react-router-dom';
import React from 'react';
import './App.css';

const NavBar = () => (
  <header>
    <div className="navbar">
      <h2>Math-magicians</h2>
      <ul>
        <Link to="./Home"><li>Home</li></Link>
        <Link to="./App"><li>Calculator</li></Link>
        <Link to="/Quote"><li>Quote</li></Link>
      </ul>

    </div>
  </header>
);

export default NavBar;
