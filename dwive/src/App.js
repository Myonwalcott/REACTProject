import React from 'react';
import Navbar from './components/navbar';
import CheckoutForm from './components/checkoutform';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CheckoutForm />
      <Footer />
    </div>
  );
}

export default App;
