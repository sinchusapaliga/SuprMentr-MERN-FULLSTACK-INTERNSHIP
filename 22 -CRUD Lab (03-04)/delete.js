// delete.js
const connectDB = require('./db');
const User = require('./models/User');
const mongoose = require('mongoose');

const deleteUser = async () => {
    await connectDB();
    try {
        const deletedUser = await User.findOneAndDelete({ username: 'alice' });
        if (deletedUser) {
            console.log('🗑️ User deleted:', deletedUser.username);
        } else {
            console.log('⚠️ User "alice" not found to delete.');
        }
    } catch (error) {
        console.error('❌ Error deleting user:', error.message);
    } finally {
        await mongoose.connection.close();
    }
};

deleteUser();
