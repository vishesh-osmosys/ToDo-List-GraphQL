const router = require("express").Router();

const deleteTask = require("../controller/todos/deleteTask");
const getAllTasks = require("../controller/todos/getAllTasks");
const getTaskById = require("../controller/todos/getTaskById");
const postTask = require("../controller/todos/postTask");
const updateTask = require("../controller/todos/updateTask");

router.get("/todos", getAllTasks);
router.post("/todos", postTask);
router.get("/todos/:task_id", getTaskById);
router.patch("/todos/:task_id", updateTask);
router.delete("/todos/:task_id", deleteTask);

module.exports = router;