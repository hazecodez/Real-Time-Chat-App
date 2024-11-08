const express = require("express");
const {
  sendMessage,
  getChatHistory,
} = require("../controllers/chatController");
const router = express.Router();

router.post("/send-message", sendMessage);
router.get("/history/:userId1/:userId2", getChatHistory);

module.exports = router;
