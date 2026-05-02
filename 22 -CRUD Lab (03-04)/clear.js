// clear.js
const connectDB = require('./db');
const User = require('./models/User');
const mongoose = require('mongoose');

const clearDB = async () => {
    await connectDB();
    try {
        await User.deleteMany({});
        console.log('🧹 Database cleared successfully.');
    } catch (error) {
        console.error('❌ Error clearing database:', error.message);
    } finally {
        await mongoose.connection.close();
    }
};

clearDB();
