const router = require('express').Router();
const apiRouter = require('./api');

router.use('/api', apiRouter);

router.get('/', (req, res) => {
    res.redirect('/api/test');
});

module.exports = router;
