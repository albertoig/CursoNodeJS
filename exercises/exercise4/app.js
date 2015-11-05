'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

let courseRouter = require('./routers/course');
let studentRouter = require('./routers/student');
let routers = [courseRouter,studentRouter];
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(routers);

let lisener = app.listen('3000', (error)=>{
    if(error){
        console.log(`Error ${error}`);
    }
    console.log(`Iniciado en ${lisener.address().host}:${lisener.address().port}`);
});