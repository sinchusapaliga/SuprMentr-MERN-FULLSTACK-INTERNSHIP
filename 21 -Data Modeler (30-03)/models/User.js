// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            minlength: 3
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
            minlength: 6
        },
        bio: {
            type: String,
            default: ''
        },
        avatar: {
            type: String,   // URL to profile picture
            default: ''
        },
        role: {
            type: String,
            enum: ['reader', 'author', 'admin'],
            default: 'reader'
        }
    },
    { timestamps: true }   // adds createdAt & updatedAt automatically
);

module.exports = mongoose.model('User', userSchema);
