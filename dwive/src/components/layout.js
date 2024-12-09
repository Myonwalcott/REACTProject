import React from 'react';
import Navbar from './navbar'; // Import Navbar component
import Footer from './footer'; // Import Footer component

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <main style={{ minHeight: 'calc(100vh - 120px)', padding: '20px' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
