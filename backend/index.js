const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const PORT = 3001;

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(socket.id + " connected");

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`user ${id} joined room ${data}`);
  });
  socket.on("disconnect", () => {
    console.log(socket.id + " disconnected");
  });
});

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
