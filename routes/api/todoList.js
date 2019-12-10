const express = require('express');
const Joi = require('joi');
const todoListRouter = express.Router();
const todoList = require('../../controllers/todo-list');

const newTaskSchema = Joi.object().keys({
    params: Joi.object().keys({
        id: Joi.number().integer().required(),
        username: Joi.string().required()
    }),
    query: Joi.object().keys({
        text: Joi.string().required()
    }),
});

const updateTaskSchema = Joi.object().keys({
    params: Joi.object().keys({
        id: Joi.number().integer().required(),
        username: Joi.string().required()
    })
});

const userSchema = Joi.object().keys({
    params: Joi.object().keys({
        username: Joi.string().required()
    }),
    query: Joi.object().keys({
        password: Joi.string().required()
    }),
});

const getTasksSchema = Joi.object().keys({
    params: Joi.object().keys({
        username: Joi.string().required()
    }),
});

todoListRouter.get('/:username/tasks', todoList.validation(getTasksSchema), todoList.getTasks);

todoListRouter.post('/:username/tasks/:id', todoList.validation(newTaskSchema), todoList.addNewTask);

todoListRouter.put('/:username/tasks/:id', todoList.validation(updateTaskSchema), todoList.updateTask);

todoListRouter.post('/:username', todoList.validation(userSchema), todoList.postUser);

module.exports = todoListRouter;
