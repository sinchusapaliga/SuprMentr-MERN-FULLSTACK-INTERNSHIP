// crud.js
const connectDB = require('./db');
const User = require('./models/User');
const mongoose = require('mongoose');

const runCRUD = async () => {
    // 1. Connect to Database
    await connectDB();

    try {
        // Clear existing data for a clean demo
        await User.deleteMany({});
        console.log('🧹 Database cleared');

        // --- CREATE ---
        console.log('\n--- CREATE ---');
        const newUser = await User.create({
            username: 'johndoe',
            email: 'john@example.com',
            password: 'securepassword123',
            role: 'user'
        });
        console.log('✅ User created:', newUser.username);

        // --- READ ---
        console.log('\n--- READ ---');
        const allUsers = await User.find();
        console.log('📚 All users:', allUsers.map(u => u.username));

        const foundUser = await User.findOne({ email: 'john@example.com' });
        console.log('🔍 Found user by email:', foundUser ? foundUser.username : 'Not found');

        // --- UPDATE ---
        console.log('\n--- UPDATE ---');
        const updatedUser = await User.findOneAndUpdate(
            { username: 'johndoe' },
            { role: 'admin' },
            { returnDocument: 'after' } // Return the updated document instead of the original
        );
        console.log('🔄 User role updated to:', updatedUser.role);

        // --- DELETE ---
        console.log('\n--- DELETE ---');
        const deletedUser = await User.findOneAndDelete({ username: 'johndoe' });
        console.log('🗑️ User deleted:', deletedUser.username);

        // Verify deletion
        const checkUser = await User.findOne({ username: 'johndoe' });
        console.log('🏁 User still exists?', checkUser ? 'Yes' : 'No');

    } catch (error) {
        console.error('❌ Error during CRUD operations:', error.message);
    } finally {
        // Close connection
        await mongoose.connection.close();
        console.log('\n🔌 Database connection closed');
    }
};

runCRUD();
