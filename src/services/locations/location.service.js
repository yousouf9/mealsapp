import camelize from "camelize";
import { locations } from "./location.mock";

export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject("Not Found!");
    }
    resolve(locationMock);
  });
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
