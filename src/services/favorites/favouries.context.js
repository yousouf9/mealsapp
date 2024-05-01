import React, { useEffect, useState, useContext, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../authentication/authentication.context";

export const FavoriteContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const { user } = useContext(AuthenticationContext);

  const saveFavourites = async (restaurants, userId) => {
    try {
      const jsonValue = JSON.stringify(restaurants);
      await AsyncStorage.setItem(`@Favourites${userId}`, jsonValue);
    } catch (e) {
      // saving error
      console.log("error saving favorites", e);
    }
  };
  const loadFavourites = async (userId) => {
    try {
      const jsonValue = await AsyncStorage.getItem(`@Favourites${userId}`);
      const newFavourites = jsonValue != null ? JSON.parse(jsonValue) : [];
      setFavorites(newFavourites);
    } catch (e) {
      // error reading value
      console.log("error loading favorites", e);
    }
  };

  const add = (restaurant) => {
    const newFavorites = [...favorites, restaurant];
    setFavorites(newFavorites);
  };

  const remove = (restaurant) => {
    const newFavorites = favorites.filter(
      (favorite) => favorite.placeId !== restaurant.placeId
    );
    setFavorites(newFavorites);
  };
  useEffect(() => {
    if (user) {
      loadFavourites(user.uid);
    }
  }, [user]);
  useEffect(() => {
    if (user) {
      saveFavourites(favorites, user.uid);
    }
  }, [favorites, user]);

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        addToFavorites: add,
        removeFromFavorites: remove,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
