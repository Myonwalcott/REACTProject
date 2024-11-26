import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <span className="navbar-toggler-icon"></span>
    <h2 className="logotext">dwive</h2>
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="BLACK">
      <path d="m397-115-99-184-184-99 71-70 145 25 102-102-317-135 84-86 385 68 124-124q23-23 57-23t57 23q23 23 23 56.5T822-709L697-584l68 384-85 85-136-317-102 102 26 144-71 71Z" />
    </svg>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/destinations">Destinations</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/checkout">Checkout</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;