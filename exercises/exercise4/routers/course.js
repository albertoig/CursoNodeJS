'use strict';

let router = require('express').Router();

router.post('/curse', (req,res,next)=>{
    console.log('prueba curse');
    res.status(200).send('prueba curse');
});

module.exports = router;