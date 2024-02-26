import React from "react";
import Search from "./Search";

function Header({ listings, onSetListings }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search listings={listings} onSetListings={onSetListings} />
    </header>
  );
}

export default Header;
