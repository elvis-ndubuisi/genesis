const router = require("express").Router();
const {
  getAPOD,
  getNEO,
  getEONET,
} = require("../../controllers/nasa.controller.js");

router.get("/nasa/apod", getAPOD);
router.get("/nasa/neo", getNEO);
router.get("/nasa/eonet", getEONET);

module.exports = router;
