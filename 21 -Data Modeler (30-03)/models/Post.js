// models/Post.js
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        slug: {
            type: String,   // URL-friendly title e.g. "my-first-post"
            required: true,
            unique: true,
            lowercase: true
        },
        content: {
            type: String,
            required: true
        },
        excerpt: {
            type: String,   // short preview shown in listings
            default: ''
        },
        coverImage: {
            type: String,   // URL to cover image
            default: ''
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',    // references the User collection
            required: true
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category' // references the Category collection
        },
        tags: {
            type: [String], // array of tag strings e.g. ["nodejs", "mongodb"]
            default: []
        },
        status: {
            type: String,
            enum: ['draft', 'published', 'archived'],
            default: 'draft'
        },
        views: {
            type: Number,
            default: 0
        },
        likes: {
            type: Number,
            default: 0
        }
    },
    { timestamps: true }    // adds createdAt & updatedAt automatically
);

module.exports = mongoose.model('Post', postSchema);
