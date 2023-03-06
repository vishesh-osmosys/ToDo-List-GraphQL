# ToDo-List-GraphQL

Todo List Application created using Express, Node, PostgreSQL and GraphQL.\
It is a CRUD (create, read, update, delete) application.

Request Body contains attributes that each task has :\
task_id : Unique id of task\
task_name : Name of task\
description : Detail about task\
status : Information if task is in progress or completed

## API's developed : 

### createTask 
-> Used for creating a task\
-> User sends a request with body {task_name, description,status}\
-> The task is inserted into the table in database using queryString\
-> Each task gets a serialised unique id\

### getTaskById
-> Used for reading a task with a specific Id\
-> User sends a request with body containing only id\ 
-> The database searches for the user with the id and sends the response to backend\

### getAllTasks
-> Used for reading all the tasks\
-> User sends a request with query string to view complete data\
-> Database sends the complete table to backend\

### updateTask
-> Used for updating a task\ 
-> User provides an Id of the task they wish to update\
-> Database returns the task with that Id\
-> User modifies some detail(name, description or status) of task and task gets inserted back\

### deleteTask
-> Used for deleting a task  
-> User provides an Id of the task they wish to delete  
-> Database finds the Id and deletes the row from the table  


Functionalities provided with Routes :\
Create new task -> POST /todos\
Read all tasks -> GET /todos\
Read task by Id -> GET /todos/:task_id\
Update task -> PATCH /todos/:task_id\ 
Delete task -> DELETE /todos/:task_id
