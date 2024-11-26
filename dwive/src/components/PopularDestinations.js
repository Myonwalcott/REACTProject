import React from 'react';

const PopularDestinations = () => {
  const destinations = [
    { img: 'Tobago.jpg', name: 'Tobago', places: 87 },
    { img: 'St Lucia.jpg', name: 'Saint Lucia', places: 56 },
    { img: 'Jamaica.jpg', name: 'Jamaica', places: 90 },
  ];

  return (
    <section className="popular-destinations">
      <h3>Popular Destinations</h3>
      <div className="destinations-container">
        {destinations.map((destination, index) => (
          <div className="destination" key={index}>
            <a href="Destinations.html">
              <img src={destination.img} alt={destination.name} />
              <h4>{destination.name}</h4>
              <p>{destination.places} Places</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularDestinations;
