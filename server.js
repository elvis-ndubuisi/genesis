const { createServer } = require("http");
const { app } = require("./app.js");

const PORT = process.env.PORT || 8000;

const server = createServer(app).listen(PORT, function () {
  console.log("GeneSis SerVEr ReADy");
});
