import React, { useState, useEffect, useContext, createContext } from "react";
import { restaurantsRequest, restaurantTransform } from "./restaurant.service";
import { LocationContext } from "../locations/location.context";

export const RestaurantsContext = createContext([]);

export const RestaurantsContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (searchLocation) => {
    setIsLoading(true);
    setRestaurants([]);
    setTimeout(() => {
      restaurantsRequest(searchLocation)
        .then(restaurantTransform)
        .then((result) => {
          setIsLoading(false);
          setRestaurants(result);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);
  return (
    <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
