// controllers/taskController.js
// The Controller layer: handles request/response logic and calls the Model.

const taskModel = require('../models/taskModel');

// GET /tasks — fetch all tasks
const getAllTasks = (req, res) => {
    const tasks = taskModel.getAllTasks();
    res.json(tasks);
};

// GET /tasks/:id — fetch a single task by ID
const getTaskById = (req, res) => {
    const task = taskModel.getTaskById(parseInt(req.params.id));
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
};

// POST /tasks — create a new task
const createTask = (req, res) => {
    const { title, completed } = req.body;
    const newTask = taskModel.createTask(title, completed);
    res.status(201).json(newTask);
};

// PUT /tasks/:id — update an existing task
const updateTask = (req, res) => {
    const updatedTask = taskModel.updateTask(parseInt(req.params.id), req.body);
    if (!updatedTask) return res.status(404).json({ message: "Task not found" });
    res.json(updatedTask);
};

// DELETE /tasks/:id — delete a task
const deleteTask = (req, res) => {
    const deletedTask = taskModel.deleteTask(parseInt(req.params.id));
    if (!deletedTask) return res.status(404).json({ message: "Task not found" });
    res.json({ message: "Task deleted successfully", task: deletedTask });
};

module.exports = { getAllTasks, getTaskById, createTask, updateTask, deleteTask };
