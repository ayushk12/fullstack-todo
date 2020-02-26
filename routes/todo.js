const express = require('express');

const router = express.Router();

const todoController= require('../controller/todoController');

router.post('/addTodo',todoController.addTodo);


router.post('/deleteTodo',todoController.deleteTodo);

module.exports= router;