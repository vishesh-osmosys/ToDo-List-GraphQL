const pool = require("../../db");

const qureyText = "SELECT * FROM todo_table;";

const getAllTasks = async (req, res) => {
    const result = await pool.query(qureyText);
    return result.rows;
};
module.exports = getAllTasks;