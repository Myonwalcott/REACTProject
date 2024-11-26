import React from 'react';
<<<<<<< HEAD
import Navbar from './components/Navbar';
import CheckoutForm from './components/CheckoutForm';
import Footer from './components/Footer';
import Login from './components/Login';
import './App.css'; 
=======
import Navbar from './components/navbar';
import CheckoutForm from './components/checkoutform';
import Footer from './components/footer';
import Hero from './components/hero';
import Search from './components/search';
import PopularDestinations from './components/populardestinations';
import './index.css'; // Global styles
import './App.css';   // Application-wide styles
>>>>>>> 95fb13b84cd50f409b5530880abf69e246b67e8f

function App() {
  return (
    <div className="App">
      <Navbar />
<<<<<<< HEAD
      <Login /> 
=======
      <header className="App-header">
        <Hero />
        <Search />
        <PopularDestinations />
      </header>
>>>>>>> 95fb13b84cd50f409b5530880abf69e246b67e8f
      <CheckoutForm />
      <Footer />
    </div>
  );
}

export default App;
