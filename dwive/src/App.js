import React from 'react';
import Navbar from './components/Navbar';
import CheckoutForm from './components/CheckoutForm';
import Footer from './components/Footer';
import Login from './components/Login';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <Navbar />
      <Login /> 
      <CheckoutForm />
      <Footer />
    </div>
  );
}

export default App;
