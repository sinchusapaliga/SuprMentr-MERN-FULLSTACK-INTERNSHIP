// models/taskModel.js
// The Model layer: responsible for data storage and data access logic.

let tasks = [
    { id: 1, title: "Learn Express", completed: true },
    { id: 2, title: "Build a Task API", completed: false }
];

// Return all tasks
const getAllTasks = () => tasks;

// Find a single task by ID
const getTaskById = (id) => tasks.find(t => t.id === id);

// Add a new task and return it
const createTask = (title, completed = false) => {
    const newTask = {
        id: tasks.length + 1,
        title,
        completed
    };
    tasks.push(newTask);
    return newTask;
};

// Update an existing task by ID; returns the updated task or null
const updateTask = (id, updates) => {
    const task = tasks.find(t => t.id === id);
    if (!task) return null;

    task.title = updates.title || task.title;
    task.completed = updates.completed !== undefined ? updates.completed : task.completed;

    return task;
};

// Delete a task by ID; returns the deleted task or null
const deleteTask = (id) => {
    const index = tasks.findIndex(t => t.id === id);
    if (index === -1) return null;

    const [deletedTask] = tasks.splice(index, 1);
    return deletedTask;
};

module.exports = { getAllTasks, getTaskById, createTask, updateTask, deleteTask };
