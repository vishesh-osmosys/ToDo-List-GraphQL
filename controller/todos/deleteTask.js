const pool = require('../../db');

const deleteTask = async (req, res) => {
    try {
        const result = await pool.query(
            `DELETE FROM todo_table WHERE task_id=$1 RETURNING *`,
            [task_id]
        );
        return result.rows[0];
    } catch (err) {
        console.log(err);
        return err;
    }
};

module.exports = deleteTask;