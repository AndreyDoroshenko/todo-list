const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    list: [{
        text: String,
        isDone: Boolean
    }],
    username: {type: String, unique: true},
    password: String,
});

//module.exports = mongoose.model('list', listSchema);
module.exports = listSchema;