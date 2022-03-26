const needle = require("needle");
const url = require("url");
const { urlConstructor } = require("./urlFunctions.js");
require("dotenv").config();

const directGeocoding = async (query) => {
  /* Using the OPEN WEATHER MAP GEOCODING API */

  const queryString = urlConstructor(process.env.OPEN_WEATHER_GEO_URL, {
    [process.env.OPEN_WEATHER_APP]: process.env.OPEN_WEATHER_KEY,
    ...url.parse(query, true).query,
    limit: 5,
  });

  try {
    const rawData = await needle("get", queryString);
    const rawDataBody = await rawData.body; // Returns an array of Objects matching 'query'.
    return rawDataBody;
  } catch (err) {
    return err;
  }
};

const reverseGeocoding = () => {};

module.exports = { directGeocoding, reverseGeocoding };
