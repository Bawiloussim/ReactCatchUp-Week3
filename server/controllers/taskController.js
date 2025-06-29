const Task = require("../Models/Task");

// Get All Tasks
const getTasks = async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
};

// Create Task
const createTask = async (req, res) => {
    const task = new Task(req.body);
    await task.save();
    res.json(task);
};

// Update Task
const UpdateTask = async (req, res) => {
    const updated = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
};

// Delete TAsk
const deleteTask = async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({message: "Deleted"});
};

module.exports = { getTasks, createTask, UpdateTask, deleteTask };