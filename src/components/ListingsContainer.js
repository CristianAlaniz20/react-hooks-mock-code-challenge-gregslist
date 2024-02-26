import React from "react";
// import ListingCard from "./ListingCard";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onSetListings }) {

  function handleDeleteListing(deletedListing) {
    const updatedListings = listings.filter(listing => listing.id !== deletedListing.id)
    onSetListings(updatedListings)
  }
  
  return (
    <main>
      <ul className="cards">
        {listings ? (
          listings.map(listing => {
            return <ListingCard 
            key={listing.id}
            listing={listing}
            description={listing.description} 
            image={listing.image} 
            location={listing.location} 
            onDeleteListing={handleDeleteListing}
            />
          })
        ) : (
          <h2>Loading...</h2>
        )}
      </ul>
    </main>
  );
}

export default ListingsContainer;
