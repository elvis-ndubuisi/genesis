/* Routes weather data from the OpenWeather API - READ only */
const router = require("express").Router();
const {
  getCityGeoLocations,
  getCityCurrentFocast,
} = require("./controllers/weather.controller.js");

router.get("/api/locations", getCityGeoLocations);
router.get("/api/focast", getCityCurrentFocast);

module.exports = router;
