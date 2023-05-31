import express from "express";
const app = express();
import { createServer } from "http";
import cors from "cors";
import { Server } from "socket.io";

const PORT = 3001;

app.use(cors());

const server = createServer(app);

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
    console.log(`user ${socket.id} joined room ${data}`);
  });
  socket.on("disconnect", () => {
    console.log(socket.id + " disconnected");
  });
});

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
