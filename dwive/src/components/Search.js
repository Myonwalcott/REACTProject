import React from 'react';

const Search = () => {
  return (
    <section className="search">
      <form action="checkout.html">
        <input type="text" placeholder="Where would you like to go" name="destination" />
        <input type="date" name="date" />
        <select name="type">
          <option value="adventure">Adventure</option>
          <option value="relaxation">Relaxation</option>
          <option value="cultural">Cultural</option>
        </select>
        <button type="submit" className="button">Search</button>
      </form>
    </section>
  );
};

export default Search;
