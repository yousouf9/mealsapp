import React, { useState, createContext, useEffect } from "react";
import { locationRequest, locationTransform } from "./location.service";
export const LocationContext = createContext({});

export const LocationProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [keyword, setKeyword] = useState("antwerp");
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  const searchRestaurants = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
  };

  useEffect(() => {
    if (!keyword.length) {
      return;
    }

    setTimeout(() => {
      locationRequest(keyword.toLowerCase())
        .then(locationTransform)
        .then((result) => {
          setIsLoading(false);
          setLocation(result);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        keyword,
        location,
        error,
        search: searchRestaurants,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
