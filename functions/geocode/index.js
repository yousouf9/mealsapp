const logger = require("firebase-functions/logger");
const { locations } = require("./location.mock");
module.exports.geocodeRequest = (request, response) => {
  const { city } = request.query;
  const locationMock = locations[city];
  response.json(locationMock);
};
