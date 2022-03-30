/* Routes weather data from the OpenWeather API - READ only */
const router = require("express").Router();
const {
  getCityGeoLocations,
  getCityCurrentForecast,
  getDayHourForecast,
} = require("../../controllers/weather.controller.js");

router.get("/api/weather/locations", getCityGeoLocations);
router.get("/api/weather/forecast", getCityCurrentForecast);
router.get("/api/weather/forecast/dayhour", getDayHourForecast);

module.exports = router;
