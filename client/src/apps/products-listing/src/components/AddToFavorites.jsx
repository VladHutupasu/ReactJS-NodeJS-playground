import React from "react";

const styledContainer = {
  position: "absolute",
  top: "10px",
  right: "10px",
};

const AddToFavorites = ({ isFavorite, onFavoriteClick, productId }) => {
  console.log("++++ Add to favs +++");
  return (
    <div style={styledContainer}>
      {!isFavorite && <button onClick={() => onFavoriteClick(productId, true)}>Add to Favorites</button>}
      {isFavorite && <button onClick={() => onFavoriteClick(productId, false)}>❤️</button>}
    </div>
  );
};

export default React.memo(AddToFavorites);
