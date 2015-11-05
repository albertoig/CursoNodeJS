'use strict';

let router = require('express').Router();

router.post('/student', (req,res,next)=>{
    console.log('prueba student');
    res.status(200).send('prueba student');
});

module.exports = router;