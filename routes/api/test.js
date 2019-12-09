const express = require('express');
const testRouter = express.Router();
const test = require('../../controllers/test');

testRouter.get('/', test.get);

testRouter.put('/', test.addNewTask);

testRouter.put('/up', test.updateTask);

testRouter.post('/', test.post);

module.exports = testRouter;
