import React, { useState } from "react";

const styledInput = {
  width: "350px",
  padding: "10px",
};

const SearchBar = function ({ onSearchValueChange }) {
  console.log("Render search bar");
  const [searchValue, setSearchValue] = useState("");

  const handleSearchValueChange = (value) => {
    setSearchValue(value);
    onSearchValueChange(value);
  };

  return (
    <input
      style={styledInput}
      type="text"
      placeholder="Search products..."
      value={searchValue}
      onChange={(e) => handleSearchValueChange(e.target.value)}
    />
  );
};

export default React.memo(SearchBar);
