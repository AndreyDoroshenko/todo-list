const listLine = require('../models/list-line');


exports.get = (req, res, next) => {
    res.send('GET handler from test.js');
}

exports.update = (req, res, next) => {
    res.send('UPDATE handler from test.js');
}

exports.post = (req, res, next) => {
    res.send('POST handler from test.js');
}

