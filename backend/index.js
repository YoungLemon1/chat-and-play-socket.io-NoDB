const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");

const PORT = 3001;

app.use(cors());

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
