// update.js
const connectDB = require('./db');
const User = require('./models/User');
const mongoose = require('mongoose');

const updateUser = async () => {
    await connectDB();
    try {
        const updatedUser = await User.findOneAndUpdate(
            { username: 'alice' },
            { role: 'admin' },
            { returnDocument: 'after' }
        );
        if (updatedUser) {
            console.log('🔄 User updated:', updatedUser);
        } else {
            console.log('⚠️ User "alice" not found to update.');
        }
    } catch (error) {
        console.error('❌ Error updating user:', error.message);
    } finally {
        await mongoose.connection.close();
    }
};

updateUser();
