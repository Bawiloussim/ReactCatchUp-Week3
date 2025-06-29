const express = require("express");
const { getTasks, createTask, UpdateTask, deleteTask } = require("../controllers/taskController");


const router = express.Router();

router.get("/", getTasks);
router.post("/", createTask);
router.put("/:id", UpdateTask);
router.delete("/:id", deleteTask);


module.exports = router;