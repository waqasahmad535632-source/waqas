const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 10000, // 10s timeout instead of 30s default
    });
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB connection failed: ${error.message}`);
    console.error('   → Check Atlas Network Access: https://cloud.mongodb.com → Network Access → Add IP Address → Allow from Anywhere (0.0.0.0/0)');
    // Don't exit — let the server stay up so you can debug
  }
};

module.exports = connectDB;
