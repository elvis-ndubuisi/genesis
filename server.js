const { createServer } = require("http");
const { app } = require("./app.js");
const PORT = process.env.PORT || 5000;

const server = createServer(app);
server.listen(PORT, () => {
  console.log("+++++ Genesis Server APP Started +++++");
});
