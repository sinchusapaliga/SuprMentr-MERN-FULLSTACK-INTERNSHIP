const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Import routes
const bookRoutes = require('./routes/books');
const authorRoutes = require('./routes/authors');

// Use routes
app.use('/books', bookRoutes);
app.use('/authors', authorRoutes);

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Bookstore API! Use /books or /authors endpoints.');
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
