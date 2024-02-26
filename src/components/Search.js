import React, { useState } from "react";

function Search({ listings, onSetListings }) {
  const [search, setSearch] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    if (search.length > 0) {
      const searchedListings = listings.filter(listing => {
        const description = listing.description.toLowerCase()
        return description.includes(search.toLowerCase())
      })
      onSetListings(searchedListings)
    } else {
      fetch("http://localhost:6001/listings")
      .then(response => response.json())
      .then(data => onSetListings(data))
      .catch(error => console.log(error))
    }
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
