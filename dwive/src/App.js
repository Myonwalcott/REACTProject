import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout'; // Import the Layout component
import CheckoutForm from './components/checkoutform';
import Hero from './components/hero';
import Search from './components/search';
import PopularDestinations from './components/populardestinations';
import Login from './components/login';
import './index.css'; // Global styles
import './App.css';   // Application-wide styles


function App() {
  return (
    <Router>
      <Routes>
        {/* Wrap all routes in the Layout component */}
        <Route path="/" element={
          <Layout>
            <header className="App-header">
              <Hero />
              <Search />
              <PopularDestinations />
            </header>
          </Layout>
        } />
        <Route path="/destinations" element={
          <Layout>
            <div>Destinations</div>
          </Layout>
        } />
        <Route path="/about" element={
          <Layout>
            <div>About Us</div>
          </Layout>
        } />
        <Route path="/checkout" element={
          <Layout>
            <CheckoutForm />
          </Layout>
        } />
        <Route path="/login" element={
          <Layout>
            <Login />
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;
