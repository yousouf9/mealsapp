import camelize from "camelize";
import { locations } from "./location.mock";

export const locationRequest = (searchTerm = "") => {
  // return new Promise((resolve, reject) => {
  //   const locationMock = locations[searchTerm];
  //   if (!locationMock) {
  //     reject("Not Found!");
  //   }
  //   resolve(locationMock);
  // });
  return fetch(
    `http://127.0.0.1:5001/meals-4a6c2/us-central1/geocode?city=${searchTerm}`
  ).then((res) => res.json());
};
export const locationTransform = ({ results }) => {
  const { geometry = {} } = camelize(results)[0];
  const { lng, lat } = geometry.location;

  return {
    lng,
    lat,
    viewport: geometry.viewport,
  };
};
