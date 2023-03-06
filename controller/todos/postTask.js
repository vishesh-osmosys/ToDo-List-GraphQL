const pool = require("../../db");
require("dotenv").config();
const table = process.env.table;

const postTask = async (args) => {
    const queryString = `INSERT INTO ${table} (task_name,description,status) VALUES ($1,$2,$3) RETURNING *`;
    const result = await pool.query(queryString, [
        args.name,
        args.description,
        args.status,
    ]);
    console.log(result.rows);
    return result.rows[0];
};

module.exports = postTask;