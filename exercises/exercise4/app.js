'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const MONGO_URI = 'mongodb://localhost:27017/coursesApp';

let courseRouter = require('./routers/course');
let studentRouter = require('./routers/student');
let routers = [courseRouter,studentRouter];
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(routers);

mongoose.connect(MONGO_URI, (err, db) => {
    if (err) {
        throw new Error('Can\'t connect to DB');
    }

    const server = app.listen(3000 , (error)=>{
        var host = server.address().address;
        var port = server.address().port;

        console.log('Example app listening at http://%s:%s', host, port);
    });
});