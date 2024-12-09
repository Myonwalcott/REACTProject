import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout'; // Import the Layout component
import CheckoutForm from './components/checkoutform';
import Hero from './components/hero';
import Search from './components/search';
import PopularDestinations from './components/populardestinations';
import Login from './components/login';
import About from './about'; // Import the About component
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
            </header>
          </Layout>
        } />
        <Route path="/destinations" element={
          <Layout>
            <PopularDestinations />
          </Layout>
        } />
        <Route path="/about" element={
          <Layout>
            <About /> {/* Render the About component */}
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
