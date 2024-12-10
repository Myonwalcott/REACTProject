import React from 'react';
import { Link } from 'react-router-dom';
import './styles/login.css';

const Login = () => {
  const showSignUpAlert = () => {
    alert('You have successfully signed up!');
  };

  const showLogINAlert = () => {
    alert('You have successfully logged in!');
  };

  return (
    <div className="login-page">
      <div className="flex-container">
        <div className="flex-item">
          <h4>Email</h4>
          <input
            type="email"
            className="form-control"
            placeholder="name@example.com"
          />
        </div>
        <div className="flex-item">
          <h4>Password</h4>
          <input
            type="password"
            className="form-control"
            placeholder="password"
          />
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
    </div>
  );
};

export default Login;
