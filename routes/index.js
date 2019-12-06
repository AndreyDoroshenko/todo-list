const express = require('express');
const router = express.Router();
const app = express();
require('/api/index')(app);

/* GET home page. */
/*  router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message' });
  //  res.send('message from index.js');
}); */
/*  const requestTime = function (req, res, next) {
  req.requestTime = Date.now();
  next();
};

router.use(requestTime);

router.get('/', function (req, res) {
  const responseText = 'Hello World!';
  res.send(responseText + 'Requested at: ' + req.requestTime + '');
  console.log(Date.now());
});

module.exports = router;  */