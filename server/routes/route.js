import express from "express";

const route = express.Router();

import { addTodo ,getAllTodos} from '../controller/todo-controller.js'
 
route.post('/todos', addTodo)
route.get('/todos',getAllTodos);


export default route;
