import React from 'react';
import './populardestinations.css';

const PopularDestinations = () => {
  return (
    <div className="PopularDestinations">
      <h3>Popular Destinations</h3>
      <div className="Destination">
        <img src="/path-to-image.jpg" alt="Destination Name" />
        <h4>Destination Name</h4>
        <p>Short description about the destination.</p>
      </div>
    </div>
  );
};

export default PopularDestinations;
