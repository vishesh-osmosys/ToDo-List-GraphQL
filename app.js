const express = require("express");
const bodyParser = require("body-parser");

require("dotenv").config();
const todo = require("./routes/todos");
const app = express();

const port = process.env.server_port;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(todo);

app.listen(port, () => console.log(`App listening on port ${port}`));

