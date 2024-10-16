module.exports.placesRequest = (request, response) => {
  const { lng, lat } = request.query;
  response.json({ lng, lat });
};
