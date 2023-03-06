const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLSchema,
    GraphQLList,
    GraphQLInt,
    GraphQLNonNull,
} = require("graphql");

const deleteTask = require("../todos/deleteTask");
const getAllTasks = require("../todos/getAllTasks");
const getTaskById = require("../todos/getTaskById");
const createTask = require("../todos/createTask");
const updateTask = require("../todos/updateTask");

const Task = new GraphQLObjectType({
    name: "Task",
    fields: {
        task_id: { type: GraphQLID },
        task_name: { type: GraphQLString },
        description: { type: GraphQLString },
        status: { type: GraphQLString },
    },
});

const Query = new GraphQLObjectType({
    name: "Query",
    fields: {
        tasks: {
            type: new GraphQLList(Task),
            resolve: async (parentValue, args) => {
                return await getAllTasks();
            },
        },
        task: {
            type: Task,
            args: { task_id: { type: GraphQLID } },
            resolve: async (parent, args) => {
                // console.log(await getTaskById(args.task_id));
                return await getTaskById(args.task_id);
            },
        },
    },
});
const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addTask: {
            type: Task,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                description: { type: GraphQLString },
                status: { type: GraphQLString },
            },
            resolve: async (parentValue, args) => {
                return await createTask(args);
            },
        },
        deleteTask: {
            type: Task,
            args: { task_id: { type: GraphQLID } },
            resolve: async (parent, args) => {
                return await deleteTask(args.task_id);
            },
        },
        updatetask: {
            type: Task,
            args: {
                task_id: { type: GraphQLID },
                description: { type: GraphQLString },
            },
            resolve: async (parent, args) => {
                return await updateTask(args);
            },
        },
    },
});
const schema = new GraphQLSchema({
    query: Query,
    mutation: Mutation,
});

module.exports = schema;