import React, { useState } from "react";

function ListingCard({ description, image, location, listing, onDeleteListing }) {
  const [isClicked, setIsClicked] = useState(false)

  function handleFavoriteClick() {
    setIsClicked(!isClicked)
  }

  /*
  {
      "id": 7,
      "description": "Treadmill Parts For Free",
      "image": "./images/treadmill.jpg",
      "location": "East Flatbush"
    }
  */

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: "DELETE",
    })
    .then(response => response.json())
    .then(() => onDeleteListing(listing))
  }
  
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt="item" />
      </div>
      <div className="details">
        {isClicked ? (
          <button className="emoji-button favorite active" onClick={handleFavoriteClick} >★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavoriteClick} >☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick} >🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
