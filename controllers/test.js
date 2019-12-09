const List = require('../models/list');
const mongoose = require('mongoose');
const list = mongoose.model('list', List);
const taskList = new list;
taskList.list.push({id: 1, text: 'text', isDone: false});
taskList.username = 'Timophey';
taskList.password = '123';

exports.get = (req, res, next) => {
    list.findOne({username: req.params.username}, (err, result) => {
        if (err) {
            res.send('error');
            console.error(err);
        } else {
            if (result) {
                console.log(result);
                res.send('found one');
            } else {
                res.send('GET ALARM');
            }
        }
    });
    //console.log(list.find({username: req.params.username}));
    /*if(list.find({username: req.params.username})) {
        const taskList = list.findOne(req.params.username);
        console.log(taskList);
        res.send(taskList.list[0]&&taskList.user ? taskList.list  : 'Hello, ' +  taskList.username + ', you have no tasks');
    } else {
        res.send('You have no lists, create a new one');
    }*/
};

exports.addNewTask = (req, res, next) => {
    const taskList = new list;
    taskList.list.push({id: req.params.id, text: req.params.text, isDone: false});
    taskList.save();
    res.send('PUT called for: ' + taskList);
};

exports.updateTask = (req,res,next) => {
    const taskList = list.find({username: req.params.username});
    let edit = taskList.list.find ((line) => line.id === req.params.id);
    if(edit) {
        edit.isDone = !edit.isDone;
    }
    taskList.save();
    res.send('UPDATE called for ' + taskList.username);
};

exports.post = (req, res, next) => {
    list.find({username: req.params.username}, (err, result) => {
        if(err){
           console.log(err);
        } else {
            if(!result){
                res.send('this user already exist');
            } else {
                const taskList = new list;
                taskList.list = [];
                taskList.username = req.params.username;
                taskList.password = req.params.password;
                taskList.save();
                res.send('POST called for: ' + taskList);
            }
        }
    })
};
