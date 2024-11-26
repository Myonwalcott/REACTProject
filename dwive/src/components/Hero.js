import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <div className="Hero" style={{ backgroundImage: 'url(/path-to-image.jpg)' }}>
      <h2>Welcome to Paradise</h2>
      <p>Your dream destination awaits</p>
      <button>Explore Now</button>
    </div>
  );
};

export default Hero;
