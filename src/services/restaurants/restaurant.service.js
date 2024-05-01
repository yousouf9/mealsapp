import camelize from "camelize";
import { mocks, mockImages } from "./mock";
import { getRandomInt } from "../../utils/random-range-numbers";
export const restaurantsRequest = (location) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("Not found!");
    }
    resolve(mock);
  });
};

export const restaurantTransform = ({ results = [] }) => {
  const restaurants = results.map((restaurant) => {
    const restTemporaryStatus =
      restaurant.business_status === "CLOSED_TEMPORARILY";
    return {
      ...restaurant,
      isClosedTemporarily: restTemporaryStatus,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      photos: [mockImages[getRandomInt(0, mockImages.length - 1)]],
    };
  });

  return camelize(restaurants);
};
