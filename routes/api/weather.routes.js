/* Routes weather data from the OpenWeather API - READ only */
const router = require("express").Router();
const {
  getCityGeoLocations,
  getCityCurrentForecast,
  getDayHourForecast,
} = require("../../controllers/weather.controller.js");

router.get("/weather/locations", getCityGeoLocations);
router.get("/weather/forecast", getCityCurrentForecast);
router.get("/weather/forecast/dayhour", getDayHourForecast);

module.exports = router;
