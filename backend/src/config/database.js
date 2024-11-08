const mongoose = require("mongoose");

const connectDatabase = () => {
  try {
    const mongoURI = process.env.MONGO_URI;

    mongoose
      .connect(mongoURI)
      .then(() => console.log("Database connected"))
      .catch((err) => console.log("DB connection error:", err));
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDatabase;
