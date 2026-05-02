# 12 -Dynamic List App (10-03)

## Description
"TaskFlow" is a sophisticated task management application that pushes the boundaries of React state management. It utilizes advanced hooks like `useCallback` and `useMemo` to ensure high performance while managing complex list interactions.

## Features
- **Complete CRUD**: Add, toggle (complete/active), and delete tasks with ease.
- **Smart Filtering**: Categorize tasks by "All", "Active", or "Completed" status.
- **Priority System**: Assign High, Medium, or Low priority to tasks with color-coded badges.
- **Advanced Stats**: Real-time counters for total, active, and completed tasks.
- **Persistence Simulation**: Includes "Clear Completed" functionality for list maintenance.
- **Premium UI**: Features a "Hero Header" with glow effects and a structured card layout.

## Tech Stack
- **Core**: React (Advanced Hooks focus)
- **State Management**: React `useState`, `useCallback`, `useMemo`
- **Build Tool**: Vite
- **Styling**: Modular CSS

## Project Structure
```
12 -Dynamic List App (10-03)/
├── src/
│   ├── TaskInput.jsx  # Input component with validation
│   ├── TaskItem.jsx   # Individual list item component
│   ├── App.jsx        # Centralized state & derived logic
│   └── index.css      # Core design system
├── index.html
└── package.json
```

## Installation and Setup
1. Open the project folder.
2. Input `npm install` in your terminal.
3. Input `npm run dev` to view the application.

## Prerequisites
- Node.js (Latest LTS recommended).
