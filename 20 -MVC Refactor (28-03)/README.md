# Task API — MVC Refactor

A refactored version of the Task API, now structured using the **MVC (Model-View-Controller)** pattern for better separation of concerns and maintainability.

## Project Structure

```
20 -MVC Refactor (28-03)/
├── models/
│   └── taskModel.js        ← Data layer (in-memory store + data access)
├── controllers/
│   └── taskController.js   ← Business logic (request/response handling)
├── routes/
│   └── taskRoutes.js       ← URL routing (maps endpoints to controller)
├── server.js               ← Entry point (app setup & server startup)
└── package.json
```

## MVC Layer Responsibilities

| Layer | File | Responsibility |
|---|---|---|
| **Model** | `models/taskModel.js` | Stores data, exposes data-access functions |
| **Controller** | `controllers/taskController.js` | Handles HTTP req/res, calls the model |
| **Route** | `routes/taskRoutes.js` | Maps URL paths to controller functions |

> **Note:** In a REST API there is no traditional "View" layer — the JSON response acts as the view.

## Getting Started

### Installation
```bash
cd "20 -MVC Refactor (28-03)"
npm install
```

### Running the Server
```bash
node server.js
```
The server runs at `http://localhost:3000`.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/tasks` | Get all tasks |
| GET    | `/tasks/:id` | Get a task by ID |
| POST   | `/tasks` | Create a new task |
| PUT    | `/tasks/:id` | Update a task |
| DELETE | `/tasks/:id` | Delete a task |

## Testing with Postman

1. **GET all tasks** — `GET http://localhost:3000/tasks`
2. **GET single task** — `GET http://localhost:3000/tasks/1`
3. **CREATE a task** — `POST http://localhost:3000/tasks`
   ```json
   { "title": "New Task", "completed": false }
   ```
4. **UPDATE a task** — `PUT http://localhost:3000/tasks/1`
   ```json
   { "completed": true }
   ```
5. **DELETE a task** — `DELETE http://localhost:3000/tasks/1`
