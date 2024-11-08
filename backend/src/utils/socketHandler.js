const socketHandler = (io) => {
  let onlineUsers = [];

  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    // User joins the chat
    socket.on("user-online", (userId) => {
      onlineUsers.push({ userId, socketId: socket.id });
      io.emit("online-users", onlineUsers);
    });

    // Send a message
    socket.on("send-message", (message) => {
      const { receiverId } = message;
      const receiverSocket = onlineUsers.find(
        (user) => user.userId === receiverId
      );
      if (receiverSocket) {
        io.to(receiverSocket.socketId).emit("new-message", message);
      }
    });

    // User disconnects
    socket.on("disconnect", () => {
      onlineUsers = onlineUsers.filter((user) => user.socketId !== socket.id);
      io.emit("online-users", onlineUsers);
    });
  });
};

module.exports = socketHandler;
