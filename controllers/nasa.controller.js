const needle = require("needle");
const url = require("url");
require("dotenv").config();
const { urlConstructor } = require("../utils/urlFunctions.js");

const URL_APOD = "https://api.nasa.gov/planetary/apod";
const URL_NEO = "https://api.nasa.gov/neo/rest/v1/feed";
const URL_EONET = "https://eonet.gsfc.nasa.gov/api/v3/events";

const getAPOD = async (req, res) => {
  // Gets the Astronomy Picture of the Day from NASA's API
  const urlString = urlConstructor(URL_APOD, {
    [process.env.NASA_API]: process.env.NASA_API_KEY,
    concept_tags: true,
  });

  try {
    const response = await needle("get", urlString);
    const {
      title,
      date,
      url,
      media_type,
      explanation,
      concepts,
      thumbnail_url,
      copyright,
    } = response.body;

    res.status(200).json({
      success: true,
      title,
      explanation,
      media_type,
      media_url: url,
      thumbnail_url,
      date,
      concepts,
      copyright,
    });
  } catch (err) {
    res.status(500).json({ success: false, reason: err });
  }
};

const getNEO = async (req, res) => {
  /*
    Expectation: returns a list of the closest NEOs to the date specified.
    Query params: start_date
   */

  const { startDate } = req.body;

  // if no query params are received.
  if (req.body === {}) {
    return res.status(406).json({
      success: false,
      reason:
        "No query params received. Please specify a start date and end date.",
    });
  }
  const urlString = urlConstructor(URL_NEO, {
    [process.env.NASA_API]: process.env.NASA_API_KEY,
    ...url.parse(req.url, true).query,
    start_date: startDate,
    limit: 3,
  });

  try {
    const response = await needle("get", urlString);
    const { element_count, near_earth_objects } = response.body;

    const neoList = Object.keys(near_earth_objects).map((date) => {
      return near_earth_objects[date].map((neo) => {
        return {
          name: neo.name,
          id: neo.id,
          is_potentially_hazardous_asteroid:
            neo.is_potentially_hazardous_asteroid,
          absolute_magnitude_h: neo.absolute_magnitude_h,
          estimated_diameter: neo.estimated_diameter,
          close_approach_data: neo.close_approach_data,
        };
      });
    });

    // if bad request.
    if (response.body?.error_message) {
      return res.status(406).json({
        success: false,
        reason: response.body.error_message,
      });
    }

    res.status(200).json({ success: true, element_count, neoList });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, reason: err });
  }
};

const getEONET = async (req, res) => {
  /* 
    Query params: source, status, limit, days
  */
  const urlString = urlConstructor(URL_EONET, {
    ...url.parse(req.url, true).query,
  });

  try {
    const response = await needle("get", urlString);
    const { events } = response.body;
    res.status(200).json({ success: true, events });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, reason: err });
  }
};

module.exports = { getAPOD, getNEO, getEONET };
