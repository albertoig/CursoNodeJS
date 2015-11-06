'use strict';

let router = require('express').Router();
let deleteMW = require('./../middlewares/students/delete');
let createMW = require('./../middlewares/students/create');
let listStudentsMW = require('./../middlewares/students/list');
let findStudentMW = require('./../middlewares/students/find');

router.post('/student', createMW ); // OK
router.get('/student', listStudentsMW ); // OK
router.post('/student/:id', deleteMW ); // NOT TESTED
router.get('/student/:id', findStudentMW ); // OK

module.exports = router;