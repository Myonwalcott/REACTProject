import React from 'react';
import Navbar from './components/navbar';
import CheckoutForm from './components/checkoutform';
import Footer from './components/footer';
import Hero from './components/hero';
import Search from './components/search';
import PopularDestinations from './components/populardestinations';
import Login from './components/login';
import './index.css'; // Global styles
import './App.css';   // Application-wide styles
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <header className="App-header">
        <Hero />
        <Search />
        <PopularDestinations />
      </header>
      <CheckoutForm />
      <Footer />
    </div>
    </Router>
  );
}

export default App;