import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span className="navbar-toggler-icon"></span>
      <h2 className="logotext">dwive</h2>
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="BLACK">
        <path d="m397-115-99-184-184-99 71-70 145 25 102-102-317-135 84-86 385 68 124-124q23-23 57-23t57 23q23 23 23 56.5T822-709L697-584l68 384-85 85-136-317-102 102 26 144-71 71Z" />
      </svg>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#destinations">Destinations</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#aboutus">About us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#checkout">Checkout</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#login">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
