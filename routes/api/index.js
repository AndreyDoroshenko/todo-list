const apiRouter = require('express').Router();
const testRoutes = require('./test');

apiRouter.use('/test', testRoutes);

module.exports = apiRouter;