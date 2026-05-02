// models/Comment.js
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true,
            trim: true
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',    // references the User collection
            required: true
        },
        post: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post',    // references the Post collection
            required: true
        },
        parentComment: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment', // null = top-level comment, otherwise a reply
            default: null
        },
        likes: {
            type: Number,
            default: 0
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Comment', commentSchema);
