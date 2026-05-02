// server.js
// Entry point: sets up the Express app and mounts routes.

const express = require('express');
const app = express();
const port = 3000;

const taskRoutes = require('./routes/taskRoutes');

app.use(express.json());

// Mount task routes under /tasks
app.use('/tasks', taskRoutes);

app.listen(port, () => {
    console.log(`MVC Task API server running on http://localhost:${port}`);
});
