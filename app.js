const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const schema = require("./model/schema");
const bodyParser = require("body-parser");

require("dotenv").config();
const todo = require("./routes/todos");

const startServer = async () => {
    const server = new ApolloServer({
        schema,
    });
    await server.start();
    app.use(todo);
    app.use("/graphql", expressMiddleware(server));
};
const app = express();

const port = process.env.server_port;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(port, () => console.log(`App listening on port ${port}`));
startServer();
