// read.js
const connectDB = require('./db');
const User = require('./models/User');
const mongoose = require('mongoose');

const readUsers = async () => {
    await connectDB();
    try {
        const users = await User.find();
        console.log('📚 All Users in Database:');
        console.table(users.map(u => ({
            id: u._id,
            username: u.username,
            email: u.email,
            role: u.role
        })));
    } catch (error) {
        console.error('❌ Error reading users:', error.message);
    } finally {
        await mongoose.connection.close();
    }
};

readUsers();
