const express = require('express');
const app = express();

module.exports = (app) => {
    app.get('/test', (req, res) => {
        app.send('GET method called');
    });
    app.put('/test', (req,res) => {
        app.send('PUT method called');
    });
};
