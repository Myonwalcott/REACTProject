import React, { useEffect } from 'react';
import './App.css'; // Import the CSS file for About page styles

const About = () => {
  useEffect(() => {
    // Add class to the body for the About Us page
    document.body.classList.add('about-us-page');
    return () => {
      // Remove class when component unmounts
      document.body.classList.remove('about-us-page');
    };
  }, []);

  return (
    <div className="about-container">
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          Welcome to our travel company! We specialize in bringing you the best Caribbean vacation experiences. Whether you’re seeking pristine beaches, exciting outdoor adventures, or cultural explorations, we have everything you need for the perfect getaway.
        </p>
        <p>
          Our team is dedicated to creating unforgettable travel experiences. We pride ourselves on offering personalized itineraries, expert guides, and exceptional customer service to make your trip one for the books.
        </p>
        <p>
          Explore the beautiful islands of the Caribbean with us and let us help you create memories that will last a lifetime. Join us on an unforgettable journey through the tropics!
        </p>
      </div>
    </div>
  );
};

export default About;

