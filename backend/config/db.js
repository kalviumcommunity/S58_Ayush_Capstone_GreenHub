const mongoose = require('mongoose');

let dbConnected = false;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
    });

    console.log(`MongoDB connected: ${conn.connection.host}`);
    dbConnected = true; // Set the flag to true on successful connection
  } catch (err) {
    console.error(`Error: ${err.message}`);
    dbConnected = false; // Set the flag to false on error
    process.exit(1);
  }
};

const getDBConnectionStatus = () => dbConnected;

module.exports = { connectDB, getDBConnectionStatus };
