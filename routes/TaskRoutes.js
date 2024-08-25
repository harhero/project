const express = require('express');
const router = express.Router();
const Task = require('../models/Task.model');


router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.get('/:id', getTask, (req, res) => {
  res.json(res.task);
});


router.post('/', async (req, res) => {
  const task = new Task({
    UserID: req.body.UserID,
    taskID: req.body.taskID,
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
    location: req.body.location,
    budget: req.body.budget,
    DueDate: req.body.DueDate
  });

  try {
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

async function getTask(req, res, next) {
  let task;
  try {
    task = await Task.findById(req.params.id);
    if (task == null) {
      return res.status(404).json({ message: 'Task not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.task = task;
  next();
}

module.exports = router;
