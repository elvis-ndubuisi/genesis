const cors = require("cors");
const corsOpt = require("./config/corsOpt.config.js");
const express = require("express");
const helmet = require("helmet");

const app = express();
const weatherRoute = require("./routes/api/weather.routes.js");
const nasaRoute = require("./routes/api/nasa.routes.js");

app.use(helmet());
app.use(cors(corsOpt));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes.
app.use("/api", weatherRoute);
app.use("/api", nasaRoute);

app.get("/", (req, res) => {
  res.send("home index");
});

module.exports = { app };
