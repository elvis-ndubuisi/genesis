let whiteList = [
  "http://localhost:3000",
  "http://localhost:5000",
  "https://genesis-weather-app.herokuapp.com",
  "https://weathercasta.netlify.app",
];

// Rest tools and server-to-server requests are blocked by default.
// Remove !origin from the next line to allow server-to-server requests.
let corsOpt = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

module.exports = corsOpt;
