let qp = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`;
const url = require("url");
const needle = require("needle");
require("dotenv").config();
const { directGeocoding } = require("../../utils/geocodingFunctions.js");
const { urlConstructor } = require("../../utils/urlFunctions.js");

const getWeatherConditionIcon = async (iconCode) => {
  const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
  try {
    const icon = await needle("get", iconUrl);
    return icon;
  } catch (err) {
    return "weather icon";
  }
};

/* Route Controllers */
const getCityGeoLocations = async (req, res) => {
  const data = await directGeocoding(req.url);

  if (data.cod === 400 || data.length < 1) {
    return res
      .status(400)
      .json({ message: "Data didn't Match or No Data to geocode" });
  }
  res.status(200).send(data);
};

const getCityCurrentFocast = async (req, res) => {
  const urlString = urlConstructor(process.env.OPEN_WEATHER_FOCAST_URL, {
    [process.env.OPEN_WEATHER_APP]: process.env.OPEN_WEATHER_KEY,
    ...url.parse(req.url, true).query,
  });

  try {
    const response = await needle("get", urlString);
    const { state } = req.query;
    const { weather, main, name, cod } = response.body;
    const icon = await getWeatherConditionIcon(weather[0].icon);
    return res.status(cod).json({
      weather,
      icon,
      main,
      name,
      state,
      id,
      cod,
    });
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  getCityGeoLocations,
  getCityCurrentFocast,
};
