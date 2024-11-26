import React from "react";
import "./login.css";

const Login = () => {
  const showSignUpAlert = () => {
    alert("You have successfully signed up!");
  };

  const showLogINAlert = () => {
    alert("You have successfully logged in!");
  };

  return (
    <div>
      <Navbar />
      <div className="flex-container">
        <div className="flex-item">
          <h4>Email</h4>
          <input type="email" className="form-control" placeholder="name@example.com" />
        </div>
        <div className="flex-item">
          <h4>Password</h4>
          <input type="password" className="form-control" placeholder="password" />
        </div>
        <div className="button-container">
          <a href="signup.html" className="button" onClick={showSignUpAlert}>Sign Up</a>
          <a href="login.html" className="button" onClick={showLogINAlert}>Log In</a>
        </div>
      </div>
      <footer className="bg-light text-center text-lg-start mt-5">
        <div className="container p-4">
          <p className="text-center">&copy; 2024 DWIVE Travel Co. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

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
          <a className="nav-link" href="Homepage.html">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="Destinations.html">Destinations</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="Aboutus.html">About us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="Checkout.html">Checkout</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="login.html">Login</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Login;
