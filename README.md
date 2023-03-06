# ToDo-List-GraphQL

Todo List Application created using Express, Node, PostgreSQL and GraphQL.

Request Body contains attributes that each task has :\
task_id : Unique id of task\
task_name : Name of task\
description : Detail about task\
status : Information if task is in progress or completed


Functionalities provided with Routes :\
Create new task -> POST /todos\
Read all tasks -> GET /todos\
Read task by Id -> GET /todos/:task_id\
Update task -> PATCH /todos/:task_id\ 
Delete task -> DELETE /todos/:task_id
