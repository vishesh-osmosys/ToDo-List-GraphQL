const pool = require("../../db");

const getTaskById = async (id) => {
    const task = await pool.query("SELECT * FROM todo_table WHERE task_id=$1", [
        id,
    ]);
    return task.rows[0];
};
module.exports = getTaskById;
