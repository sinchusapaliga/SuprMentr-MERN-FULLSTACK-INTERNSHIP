// routes/taskRoutes.js
// The Route layer: maps HTTP endpoints to the appropriate controller functions.

const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.get('/', taskController.getAllTasks);          // GET    /tasks
router.get('/:id', taskController.getTaskById);      // GET    /tasks/:id
router.post('/', taskController.createTask);         // POST   /tasks
router.put('/:id', taskController.updateTask);       // PUT    /tasks/:id
router.delete('/:id', taskController.deleteTask);    // DELETE /tasks/:id

module.exports = router;
