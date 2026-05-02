// db.js
// Handles MongoDB connection using Mongoose.

const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://127.0.0.1:27017/blogDB';

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('✅ Connected to MongoDB — blogDB');
    } catch (error) {
        console.error('❌ MongoDB connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
