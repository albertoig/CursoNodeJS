'use strict';

let express = require('express');
let bodyParser = require('body-parser');
let squareRouter = require('./routers');
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(squareRouter);

app.listen('3000', (err)=>{
    console.log('Iniciado en ');
});