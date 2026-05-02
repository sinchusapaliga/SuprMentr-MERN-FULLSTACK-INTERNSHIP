// viewData.js
const connectDB = require('./db');
const User = require('./models/User');
const Category = require('./models/Category');
const Post = require('./models/Post');
const Comment = require('./models/Comment');

const viewAllData = async () => {
    await connectDB();

    console.log('\n--- 👥 USERS ---');
    const users = await User.find();
    console.table(users.map(u => ({ id: u._id, name: u.username, email: u.email, role: u.role })));

    console.log('\n--- 📂 CATEGORIES ---');
    const categories = await Category.find();
    console.table(categories.map(c => ({ id: c._id, name: c.name, slug: c.slug })));

    console.log('\n--- 📝 POSTS ---');
    const posts = await Post.find().populate('author', 'username').populate('category', 'name');
    console.table(posts.map(p => ({ 
        id: p._id, 
        title: p.title, 
        author: p.author.username, 
        category: p.category.name,
        status: p.status 
    })));

    console.log('\n--- 💬 COMMENTS ---');
    const comments = await Comment.find().populate('author', 'username');
    console.table(comments.map(c => ({ 
        id: c._id, 
        content: c.content, 
        author: c.author.username,
        isReply: c.parentComment !== null
    })));

    process.exit(0);
};

viewAllData().catch(err => {
    console.error(err);
    process.exit(1);
});
