import React from 'react';
import './styles/login.css';
import Navbar from './navbar';
import { Link } from 'react-router-dom';

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
          <Link to="/signup" className="button" onClick={showSignUpAlert}>
            Sign Up
          </Link>
          <Link to="/login" className="button" onClick={showLogINAlert}>
            Log In
          </Link>
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

export default Login;