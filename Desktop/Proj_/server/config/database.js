const mongoose = require('mongoose');
const { DB_URI } = process.env;  // MongoDB URI from environment variables
//require('dotenv').config();
//const DB_URI = process.env.DB_URI;
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/CollDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully.');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);  // Exit with failure if connection fails
  }
};

module.exports = connectDB;