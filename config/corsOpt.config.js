let whiteList = [
  "http://localhost:3000",
  "http://localhost:5000",
  "https://genesis-weather-app.herokuapp.com",
  "https://weathercasta.netlify.app",
];
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
