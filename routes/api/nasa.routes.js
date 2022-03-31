const router = require("express").Router();
const { getAPOD, getNEO } = require("../../controllers/nasa.controller.js");

router.get("/nasa/apod", getAPOD);
router.get("/nasa/neo", getNEO);

module.exports = router;
