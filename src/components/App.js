import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(response => response.json())
    .then(data => {
      setListings(data)
      console.log("Hey from effect")
    })
    .catch(error => console.log(error))
  }, [])
  
  return (
    <div className="app">
      <Header listings={listings} onSetListings={setListings} />
      <ListingsContainer listings={listings} onSetListings={setListings} />
    </div>
  );
}

export default App;
