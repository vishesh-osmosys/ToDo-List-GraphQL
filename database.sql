CREATE DATABASE todo_database;

CREATE TABLE todo_table(task_id SERIAL PRIMARY KEY,task_name VARCHAR NOT NULL, status VARCHAR default 'in_progress',description VARCHAR);