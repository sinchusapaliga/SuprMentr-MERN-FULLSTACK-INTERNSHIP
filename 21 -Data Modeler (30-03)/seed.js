// seed.js
// Populates the database with sample data to demonstrate the schema relationships.

const connectDB = require('./db');
const User = require('./models/User');
const Category = require('./models/Category');
const Post = require('./models/Post');
const Comment = require('./models/Comment');

const seed = async () => {
    await connectDB();

    // Clear existing data
    await User.deleteMany();
    await Category.deleteMany();
    await Post.deleteMany();
    await Comment.deleteMany();
    console.log('🗑️  Cleared existing data');

    // --- 1. Create Users ---
    const alice = await User.create({
        username: 'alice',
        email: 'alice@example.com',
        password: 'hashed_password_1',
        bio: 'Full-stack developer and tech blogger.',
        role: 'author'
    });

    const bob = await User.create({
        username: 'bob',
        email: 'bob@example.com',
        password: 'hashed_password_2',
        bio: 'JavaScript enthusiast.',
        role: 'reader'
    });
    console.log('👤 Users created');

    // --- 2. Create Categories ---
    const techCategory = await Category.create({
        name: 'Technology',
        slug: 'technology',
        description: 'Posts about software and tech trends.'
    });

    const webCategory = await Category.create({
        name: 'Web Development',
        slug: 'web-development',
        description: 'HTML, CSS, JavaScript and beyond.'
    });
    console.log('📂 Categories created');

    // --- 3. Create Posts ---
    const post1 = await Post.create({
        title: 'Getting Started with MongoDB',
        slug: 'getting-started-with-mongodb',
        content: 'MongoDB is a NoSQL database that stores data in flexible, JSON-like documents...',
        excerpt: 'A beginner-friendly intro to MongoDB.',
        author: alice._id,
        category: techCategory._id,
        tags: ['mongodb', 'database', 'nosql'],
        status: 'published'
    });

    const post2 = await Post.create({
        title: 'Understanding Mongoose Schemas',
        slug: 'understanding-mongoose-schemas',
        content: 'Mongoose provides a schema-based solution to model your application data...',
        excerpt: 'Learn how to design schemas with Mongoose.',
        author: alice._id,
        category: webCategory._id,
        tags: ['mongoose', 'nodejs', 'schema'],
        status: 'published'
    });
    console.log('📝 Posts created');

    // --- 4. Create Comments ---
    const comment1 = await Comment.create({
        content: 'Great introduction! Very helpful.',
        author: bob._id,
        post: post1._id,
        parentComment: null  // top-level comment
    });

    // A reply to comment1
    await Comment.create({
        content: 'Glad you found it useful, Bob!',
        author: alice._id,
        post: post1._id,
        parentComment: comment1._id  // reply to bob's comment
    });

    await Comment.create({
        content: 'This really clarified schemas for me. Thanks!',
        author: bob._id,
        post: post2._id,
        parentComment: null
    });
    console.log('💬 Comments created');

    console.log('\n✅ Database seeded successfully!');
    process.exit(0);
};

seed().catch(err => {
    console.error('❌ Seeding failed:', err);
    process.exit(1);
});
