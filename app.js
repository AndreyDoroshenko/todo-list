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

app.use('/', require('./routes'));

app.listen(port, () => {
    console.log('Todo API listen on ', port);
});
