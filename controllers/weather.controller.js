const url = require("url");
const needle = require("needle");
require("dotenv").config();
const { directGeocoding } = require("../utils/geocodingFunctions.js");
const { urlConstructor } = require("../utils/urlFunctions.js");

/* Route Controllers */
const getCityGeoLocations = async (req, res) => {
  const data = await directGeocoding(req.url);

  if (data.cod === 400 || data.length < 1) {
    return res.status(400).json({
      message: "Data didn't Match or No Data to geocode",
      status: 400,
    });
  }
  res.status(200).send(data);
};

const getCityCurrentForecast = async (req, res) => {
  const urlString = urlConstructor(process.env.OPEN_WEATHER_FORECAST_URL, {
    [process.env.OPEN_WEATHER_APP]: process.env.OPEN_WEATHER_KEY,
    ...url.parse(req.url, true).query,
    units: "metric",
  });

  try {
    const response = await needle("get", urlString);
    const { state } = req.query;
    const { weather, main, name, cod } = response.body;
    const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
    const data = { weather, main, name, iconUrl, state, cod };

    res.send(data);
  } catch (err) {
    res.send(err);
  }
};

const getDayHourForecast = async (req, res) => {
  const urlString = urlConstructor(process.env.OPEN_WEATHER_DAY_FORECAST_URL, {
    [process.env.OPEN_WEATHER_APP]: process.env.OPEN_WEATHER_KEY,
    ...url.parse(req.url, true).query,
    units: "metric",
    cnt: 5,
  });

  try {
    const response = await needle("get", urlString);
    const { list, city } = response.body;
    res.status(200).json({ list, city });
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  getCityGeoLocations,
  getCityCurrentForecast,
  getDayHourForecast,
};
