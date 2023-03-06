const router = require("express").Router();

const deleteTask = require("../todos/deleteTask");
const getAllTasks = require("../todos/getAllTasks");
const getTaskById = require("../todos/getTaskById");
const postTask = require("../todos/postTask");
const updateTask = require("../todos/updateTask");

router.get("/todos", getAllTasks);
router.post("/todos", postTask);
router.get("/todos/:task_id", getTaskById);
router.patch("/todos/:task_id", updateTask);
router.delete("/todos/:task_id", deleteTask);

module.exports = router;