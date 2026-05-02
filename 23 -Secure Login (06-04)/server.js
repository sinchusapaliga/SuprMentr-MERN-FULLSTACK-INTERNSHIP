require('dotenv').config();
const express = require('express');
const connectDB = require('./db');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Global Error Handler
app.use((err, req, res, next) => {
    console.error('Global Error Handler caught:', err);
    res.status(500).json({
        message: 'Global Server Error',
        error: err.message,
        stack: err.stack
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
