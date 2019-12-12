const List = require('../models/list');
const mongoose = require('mongoose');
const list = mongoose.model('list', List);
const Joi = require('joi');


exports.getTasks = (req, res) => {
    list.findOne({username: req.params.username, password: req.query.password}, (err, result) => {
        if (err) {
            console.error(err);
        } else {
            if (result) {
                res.json(result.list);
            } else {
                res.json({ message: 'username or(and) password are incorrect'});
            }
        }
    });
};

exports.addNewTask = (req, res) => {
   list.findOne({username: req.params.username}, (err, result) => {
       if (err) {
           console.error(err);
       } else {
           result.list.push({ text: req.query.text, isDone: false });
           result.save();
           res.json({ message: 'done' });
           }
       })
};

exports.updateTask = (req,res) => {
    list.findOne({username: req.params.username}, (err, result) => {
        if (err) {
            console.log(err);
        }
        if(result !== null) {
            const edit = result.list.find((line) => line.id === req.params.taskID);
            if(edit) {
                edit.isDone = !edit.isDone;
                result.save();
                res.json({ message: 'done' });
            } else {
                res.json({ message: 'this task doesn\'t exist'});
            }
        } else {
            res.json({ message: 'this user doesn\'t exist (what?!)'});
        }
    });
};

exports.postUser = (req, res) => {
    list.findOne({username: req.params.username, password: req.query.password}, (err, result) => {
        if(err) {
           console.log(err);
        } else {
            if (result) {
                res.json({message: 'this user already exist'})
            } else {
                const taskList = new list({list: [], username: req.params.username, password: req.query.password});
                taskList.save( (error) => {
                    if(error) {
                        console.log(error);
                    }
                });
            }
        }
    })
};

exports.validation = (schema) => {
    return (req, res, next) => {
        console.dir(req.query + req.params);
        const error = Joi.validate( { params: req.params, query: req.query}, schema);
        if (error.error === null) {
            console.log('validation complete');
            next();
        } else {
            console.log("error", error);
            res.status(400).json(error);
        }
    }
};
