const cors = require("cors");
const express = require("express");
const helmet = require("helmet");

const weatherRoute = require("./routes/api/weather.routes.js");

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes.
app.use("/weather", weatherRoute);

app.get("/", (req, res) => {
  res.send("home index");
});

module.exports = { app };
