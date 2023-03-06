const pool = require("../../db");

const updateTask = async (args) => {
    const result = await pool.query(
        `UPDATE todo_table SET description=$1 WHERE task_id=$2 RETURNING *`,
        [args.description, args.task_id]
    );
    console.log(result);
    return args;
};

module.exports = updateTask;