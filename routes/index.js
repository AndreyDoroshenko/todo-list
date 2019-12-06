const express = require('express');
const router = express.Router();
const test = require('../handlers/test');

/* GET home page. */
router.get('/', function(req, res, next){
  res.send(req);
  res.redirect('/api/get');
})

router.get('/api/get', test.get);

router.put('/api/update', test.update);

router.post('/api/post', test.post);

module.exports = router;