// models/Category.js
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        slug: {
            type: String,   // URL-friendly version e.g. "web-development"
            required: true,
            unique: true,
            lowercase: true
        },
        description: {
            type: String,
            default: ''
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Category', categorySchema);
