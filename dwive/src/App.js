import React from 'react';
import Navbar from './components/navbar';
import CheckoutForm from './components/checkoutform';
import Footer from './components/footer';
import Hero from './components/hero';
import Search from './components/search';
import PopularDestinations from './components/populardestinations';
import './index.css'; // Global styles
import './App.css';   // Application-wide styles

function App() {
  return (
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
  );
}

export default App;
