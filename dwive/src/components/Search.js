import React from 'react';
import './search.css';

const Search = () => {
  return (
    <div className="Search">
      <h3>Search for Destinations</h3>
      <form>
        <input type="text" placeholder="Enter destination" />
        <select>
          <option>Choose category</option>
          <option>Beach</option>
          <option>Mountain</option>
        </select>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
