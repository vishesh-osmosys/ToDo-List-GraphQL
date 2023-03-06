const pool = require('../db');

const queryText = "SELECT * FROM todo_table;";

const getAllTasks = async (req, res) => {
    const result = await pool.query(queryText);
    return result.rows;
};
module.exports = getAllTasks;