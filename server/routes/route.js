import express from "express";

const route = express.Router();

import { addTodo ,getAllTodos, toggleTodoDone } from '../controller/todo-controller.js'
 
route.post('/todos', addTodo)
route.get('/todos',getAllTodos);
route.get('/todos/:id', toggleTodoDone);

export default route;
