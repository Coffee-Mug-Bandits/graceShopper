const http = require("http");
const { PORT = 8080 } = process.env;
const app = require("./app");
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
