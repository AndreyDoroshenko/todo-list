const apiRouter = require('express').Router();
const todoList = require('./todoList');

apiRouter.use('/todo-list', todoList);

module.exports = apiRouter;