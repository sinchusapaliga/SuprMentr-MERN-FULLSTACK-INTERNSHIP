# 13 -Multi-Page App  (11-03)

## Description
A professional creative agency website built as a Single Page Application (SPA). This project focuses on high-performance navigation and clean architectural separation of pages and layouts.

## Features
- **Seamless Navigation**: Instant page transitions without reloading, powered by React Router.
- **Multi-Page Architecture**: Includes dedicated Home, Services, Portfolio, and Contact pages.
- **Shared Layout**: Implements a `Layout` wrapper for consistent Header and Footer across all routes.
- **Responsive Design**: Each page is optimized for all device viewports.
- **SEO Optimized**: Uses semantic HTML and descriptive routing paths.

## Tech Stack
- **Library**: React
- **Routing**: React Router DOM (v6+)
- **Build Tool**: Vite
- **Styling**: CSS3

## Project Structure
```
13 -Multi-Page App  (11-03)/
├── src/
│   ├── components/ # Nav, Footer, Layout
│   ├── pages/      # Home, Services, Portfolio, Contact
│   ├── App.jsx     # Route Definitions
│   └── index.css   # Global Styling
├── index.html
└── package.json
```

## Installation and Setup
1. Clone the repository and navigate to this folder.
2. Run `npm install` to fetch dependencies.
3. Run `npm run dev` to start the application.

## Prerequisites
- Node.js & npm/yarn.
