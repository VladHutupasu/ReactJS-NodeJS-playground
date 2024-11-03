import PropTypes from "prop-types";
import React, { useCallback, useState } from "react";
import AddToFavorites from "./AddToFavorites";
import styles from "./productsList.module.scss";

const LOCAL_STORAGE_KEY = "FAVORITES_LIST";

const ProductsList = function ({ products }) {
  const [favorites, setFavorites] = useState(() => {
    try {
      let localStorageItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
      return new Set(localStorageItems);
    } catch (error) {
      const newList = new Set();
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([...newList]));
      return newList;
    }
  });

  const handleFavoriteClick = useCallback((productId, isFavorite) => {
    let localStorageItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
    let list = new Set(localStorageItems);
    if (isFavorite) {
      list.add(productId);
    } else {
      list.delete(productId);
    }

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([...list]));
    setFavorites(list);
  }, []);

  return (
    <div className={styles.container}>
      {products.map(({ id, title, thumbnail, price, rating }) => (
        <div key={id} className={styles.card}>
          <AddToFavorites isFavorite={favorites.has(id)} onFavoriteClick={handleFavoriteClick} productId={id} />
          <img className={styles.image} src={thumbnail} alt={title} width={200} height={200} loading="lazy" />
          <h3>{title}</h3>
          <p>Price: {price}$</p>
          <p>Rating: {rating}</p>
        </div>
      ))}
    </div>
  );
};

export default React.memo(ProductsList);

ProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
};
