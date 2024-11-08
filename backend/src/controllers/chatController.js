const Message = require("../models/messageModel");

exports.sendMessage = async (req, res) => {
  const { senderId, receiverId, content } = req.body;
  const message = new Message({
    sender: senderId,
    receiver: receiverId,
    content,
  });
  await message.save();
  res.status(201).send(message);
};

exports.getChatHistory = async (req, res) => {
  const { userId1, userId2 } = req.params;
  const messages = await Message.find({
    $or: [
      { sender: userId1, receiver: userId2 },
      { sender: userId2, receiver: userId1 },
    ],
  }).sort({ timestamp: 1 });
  res.json(messages);
};
