const http = require("http");
const { PORT = 5000 } = process.env;
const app = require("./app");
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
