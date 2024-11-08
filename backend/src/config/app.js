const express = require("express");
const http = require("http");
const cors = require("cors");
const userRoutes = require("../routes/userRoutes");
const chatRoutes = require("../routes/chatRoutes");
const notificationRoutes = require("../routes/notificationRoutes");
const socketIo = require("socket.io");
const socketHandler = require("../utils/socketHandler");

const serverCreation = () => {
  try {
    const app = express();
    app.use(cors());
    app.use(express.json());

    app.use("/api/auth", userRoutes);
    app.use("/api/chat", chatRoutes);
    app.use("/api/notifications", notificationRoutes);

    // Create HTTP server and Socket.IO instance
    const server = http.createServer(app);
    const io = socketIo(server);
    socketHandler(io);

    return server;
  } catch (error) {
    console.log("server creation error: ", error);
  }
};

module.exports = serverCreation;
