# 17 -Hello Server (23-03)

## Description
A versatile Node.js backend application built with Express. This server demonstrates the dual capability of serving rich, interactive HTML content and structured JSON API responses.

## Features
- **Dynamic Routing**: Multiple endpoint handlers for `/hello`, `/about`, `/time`, and `/contact`.
- **Styled Homepage**: A beautiful, CSS-in-JS styled landing page with glassmorphism and animations.
- **JSON API**: A status endpoint (`/api/status`) that returns server metrics (uptime, status, timestamp).
- **Global 404 Handler**: Catches and handles undefined routes gracefully.
- **Time/Date Integration**: Server-side time determination for the `/time` route.

## Tech Stack
- **Environment**: Node.js
- **Framework**: Express.js
- **Styling**: HTML/CSS served from backend

## Project Structure
```
17 -Hello Server (23-03)/
├── index.js     # Core Server Logic & Express configuration
├── package.json # Dependencies & Scripts
└── node_modules/
```

## Installation and Setup
1. Navigate to the `17 -Hello Server (23-03)` directory.
2. Run `npm install` to install Express.
3. Start the server using: `node index.js`.


## Prerequisites
- Node.js (v14+)
- Express.js (managed via npm)
