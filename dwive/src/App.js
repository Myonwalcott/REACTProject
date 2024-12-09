import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import CheckoutForm from './components/checkoutform';
import Footer from './components/footer';
import Hero from './components/hero';
import Search from './components/search';
import PopularDestinations from './components/populardestinations';
import Login from './components/login';
import './index.css'; // Global styles
import './App.css';   // Application-wide styles

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <header className="App-header">
              <Hero />
              <Search />
              <PopularDestinations />
            </header>
          } />
          <Route path="/destinations" element={<div>Destinations</div>} />
          <Route path="/about" element={<div>About Us</div>} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
