const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/todo_list', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
(error) => {
    if(error) { console.log(error);
    }
});

const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/', require('./routes'));

app.listen(port, () => {
    console.log('Todo API listen on ', port);
});
