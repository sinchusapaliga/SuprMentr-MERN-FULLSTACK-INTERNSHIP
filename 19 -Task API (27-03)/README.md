# Task Manager API

A simple CRUD API for managing tasks using Express.

## Getting Started

### Installation
1. Navigate to the project folder:
   ```bash
   cd "18 -Task API (27-03)"
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Server
```bash
node server.js
```
The server will be available at `http://localhost:3000`.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/tasks` | Get all tasks |
| GET    | `/tasks/:id` | Get a task by ID |
| POST   | `/tasks` | Create a new task |
| PUT    | `/tasks/:id` | Update a task |
| DELETE | `/tasks/:id` | Delete a task |

## Testing with Postman
1. **GET all tasks**: Set method to `GET` and URL to `http://localhost:3000/tasks`.
2. **CREATE a task**: Set method to `POST`, URL to `http://localhost:3000/tasks`, and Body (JSON) to:
   ```json
   {
     "title": "New Task",
     "completed": false
   }
   ```
3. **UPDATE a task**: Set method to `PUT`, URL to `http://localhost:3000/tasks/1`, and Body (JSON) to:
   ```json
   {
     "completed": true
   }
   ```
4. **DELETE a task**: Set method to `DELETE` and URL to `http://localhost:3000/tasks/1`.
