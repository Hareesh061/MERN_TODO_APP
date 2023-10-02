import express from "express";

const route = express.Router();

import { addTodo } from '../controller/todo-controller.js'
 
route.post('/todos', addTodo)



export default route;