import React, { useState, useEffect } from 'react';
import useLocalStorage from '../components/useLocalStorage.jsx';

export const FavContext = React.createContext([]);

const FavProvider = ({ children }) => {
  const [favourites, setFavourites] = useLocalStorage('favourites', []);

  const toggleFavourite = (item) => {
    if (favourites.some((fav) => fav.id === item.id)) {
      setFavourites(favourites.filter((fav) => fav.id !== item.id));
    } else {
      setFavourites([...favourites, item]);
    }
  };

  return (
    <FavContext.Provider value={{ favourites, setFavourites, toggleFavourite }}>
      {children}
    </FavContext.Provider>
  );
};

export default FavProvider;
