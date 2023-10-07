import express from "express";

const route = express.Router();

import { addTodo ,getAllTodos, toggleTodoDone , updateTodo} from '../controller/todo-controller.js'
 
route.post('/todos', addTodo)
route.get('/todos',getAllTodos);
route.get('/todos/:id', toggleTodoDone);
route.put('/todos/:id', updateTodo);

export default route;
