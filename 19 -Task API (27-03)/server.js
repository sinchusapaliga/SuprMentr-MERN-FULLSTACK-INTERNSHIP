const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// In-memory task storage
let tasks = [
    { id: 1, title: "Learn Express", completed: true },
    { id: 2, title: "Build a Task API", completed: false }
];

// GET all tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// GET a specific task
app.get('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
});

// POST a new task
app.post('/tasks', (req, res) => {
    const newTask = {
        id: tasks.length + 1,
        title: req.body.title,
        completed: req.body.completed || false
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

// PUT (update) a task
app.put('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).json({ message: "Task not found" });

    task.title = req.body.title || task.title;
    task.completed = req.body.completed !== undefined ? req.body.completed : task.completed;

    res.json(task);
});

// DELETE a task
app.delete('/tasks/:id', (req, res) => {
    const index = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: "Task not found" });

    const deletedTask = tasks.splice(index, 1);
    res.json({ message: "Task deleted successfully", task: deletedTask[0] });
});

app.listen(port, () => {
    console.log(`Task API server running on http://localhost:${port}`);
});
