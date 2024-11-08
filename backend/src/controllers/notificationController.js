const Notification = require("../models/notificationModel");

exports.createNotification = async (userId, message) => {
  const notification = new Notification({ user: userId, message });
  await notification.save();
};

exports.getNotifications = async (req, res) => {
  const { userId } = req.params;
  const notifications = await Notification.find({ user: userId }).sort({
    timestamp: -1,
  });
  res.json(notifications);
};
