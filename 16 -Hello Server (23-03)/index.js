const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Root Route - Styled HTML message
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Hello Server | Home</title>
            <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600&display=swap" rel="stylesheet">
            <style>
                :root {
                    --primary: #6366f1;
                    --secondary: #a855f7;
                    --dark: #0f172a;
                    --light: #f8fafc;
                }
                body {
                    margin: 0;
                    padding: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    background: radial-gradient(circle at top left, #1e293b, var(--dark));
                    color: var(--light);
                    font-family: 'Outfit', sans-serif;
                    overflow: hidden;
                }
                .container {
                    text-align: center;
                    background: rgba(255, 255, 255, 0.03);
                    backdrop-filter: blur(10px);
                    padding: 3rem;
                    border-radius: 24px;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
                    max-width: 600px;
                    width: 90%;
                    animation: fadeIn 0.8s ease-out;
                }
                h1 {
                    font-size: 3rem;
                    margin-bottom: 1rem;
                    background: linear-gradient(to right, var(--primary), var(--secondary));
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                p {
                    font-size: 1.1rem;
                    color: #94a3b8;
                    line-height: 1.6;
                    margin-bottom: 2rem;
                }
                .routes {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 1rem;
                    justify-content: center;
                }
                .route-btn {
                    padding: 0.8rem 1.5rem;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 12px;
                    color: var(--light);
                    text-decoration: none;
                    transition: all 0.3s ease;
                    font-weight: 500;
                }
                .route-btn:hover {
                    background: var(--primary);
                    transform: translateY(-3px);
                    box-shadow: 0 10px 20px -5px rgba(99, 102, 241, 0.4);
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Hello Server 🚀</h1>
                <p>Welcome to the assignment server. Explore different routes to see how the server responds dynamically to your requests.</p>
                <div class="routes">
                    <a href="/hello" class="route-btn">/hello</a>
                    <a href="/about" class="route-btn">/about</a>
                    <a href="/time" class="route-btn">/time</a>
                    <a href="/contact" class="route-btn">/contact</a>
                    <a href="/api/status" class="route-btn">/api/status</a>
                </div>
            </div>
        </body>
        </html>
    `);
});

// Hello Route
app.get('/hello', (req, res) => {
    res.send('<h1>👋 Hello!</h1><p>Welcome to the hello route. Nice to meet you!</p><br><a href="/">Back Home</a>');
});

// About Route
app.get('/about', (req, res) => {
    res.send('<h1>📖 About Us</h1><p>This is a simple Node.js server built with Express for the MERN Fullstack Internship.</p><br><a href="/">Back Home</a>');
});

// Time Route
app.get('/time', (req, res) => {
    const now = new Date();
    res.send(`<h1>🕒 Current Time</h1><p>Today is: <strong>${now.toDateString()}</strong></p><p>Server time: <strong>${now.toLocaleTimeString()}</strong></p><br><a href="/">Back Home</a>`);
});

// Contact Route
app.get('/contact', (req, res) => {
    res.send('<h1>📧 Contact</h1><p>Reach out to us at <a href="mailto:support@example.com" style="color:#6366f1;">support@example.com</a></p><br><a href="/">Back Home</a>');
});

// JSON API Route
app.get('/api/status', (req, res) => {
    res.json({
        status: 'Online',
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        message: 'Server is running smoothly! ⚡'
    });
});

// 404 Handler
app.use((req, res) => {
    res.status(404).send('<h1>404 - Not Found</h1><p>Sorry, that route doesn\'t exist.</p><br><a href="/">Back Home</a>');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
