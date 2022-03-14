/* Routes weather data from the OpenWeather API - READ only */
const router = require("express").Router();
const {
  getCityGeoLocations,
  getCityCurrentForecast,
  getDayHourForecast,
} = require("./controllers/weather.controller.js");

router.get("/api/locations", getCityGeoLocations);
router.get("/api/forecast", getCityCurrentForecast);
router.get("/api/forecast/dayhour", getDayHourForecast);

module.exports = router;
