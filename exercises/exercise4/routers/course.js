'use strict';

let router = require('express').Router();
let deleteMW = require('./../middlewares/courses/delete');
let createMW = require('./../middlewares/courses/create');
//let updateMW = require('./../middlewares/courses/update');
let openCoursesMW = require('./../middlewares/courses/open');
let listCoursesMW = require('./../middlewares/courses/list');

router.post('/course', createMW ); // OK
router.get('/course', listCoursesMW ); // OK
router.post('/course/:id', deleteMW ); // NOT OK
router.get('/course/open', openCoursesMW ); // OK

module.exports = router;