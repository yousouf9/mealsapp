import React from "react";
import { CompactRestaurantInfo } from "../../../components/restaurants/compact-info-restaurant.component";

export const MapCallout = ({ restaurant }) => {
  return <CompactRestaurantInfo restaurant={restaurant} />;
};
