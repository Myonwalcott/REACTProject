import React, { useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const PopularDestinations = () => {
  const destinations = [
    {
      name: "Tobago",
      lat: 11.2334,
      lng: -60.6895,
    },
    {
      name: "Jamaica",
      lat: 18.1096,
      lng: -77.2975,
    },
    {
      name: "St. Lucia",
      lat: 13.9094,
      lng: -60.9789,
    },
  ];

  const containerStyle = {
    width: '100%',
    height: '300px',
    marginBottom: '20px',
  };

  const mapOptions = {
    disableDefaultUI: true,
    zoomControl: true,
  };

  useEffect(() => {
    document.body.classList.add('popular-destinations-page');

    return () => {
      document.body.classList.remove('popular-destinations-page');
    };
  }, []);

  return (
    <div>
      <div className="header-container">
        <h1 className="text-center">Popular Destinations</h1>
        <p className="text-center">
          Explore these beautiful locations with a quick glance at their map locations.
        </p>
      </div>
      <div className="destinations-wrapper">
        {destinations.map((destination, index) => (
          <div key={index} className="destination-card">
            <h2 className="text-center">{destination.name}</h2>
            <LoadScript googleMapsApiKey="AIzaSyCLhMNlPgXcFG23EvMV4BytrMmNAFPAd58">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={{ lat: destination.lat, lng: destination.lng }}
                zoom={10}
                options={mapOptions}
              >
                <Marker position={{ lat: destination.lat, lng: destination.lng }} />
              </GoogleMap>
            </LoadScript>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularDestinations;
