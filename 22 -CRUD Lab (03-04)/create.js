// create.js
const connectDB = require('./db');
const User = require('./models/User');
const mongoose = require('mongoose');

const createUser = async () => {
    await connectDB();
    try {
        const newUser = await User.create({
            username: 'alice',
            email: 'alice@example.com',
            password: 'alicepassword',
            role: 'user'
        });
        console.log('✅ User created:', newUser);
    } catch (error) {
        console.error('❌ Error creating user:', error.message);
    } finally {
        await mongoose.connection.close();
    }
};

createUser();
