const express = require("express");
const { getNotifications } = require("../controllers/notificationController");
const router = express.Router();

router.get("/user/:userId", getNotifications);

module.exports = router;
