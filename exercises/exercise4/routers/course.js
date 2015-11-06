'use strict';

let router = require('express').Router();
let deleteMW = require('./../middlewares/courses/delete');
let createMW = require('./../middlewares/courses/create');
let openCoursesMW = require('./../middlewares/courses/open');
let listCoursesMW = require('./../middlewares/courses/list');
let enrollToCourse = require('./../middlewares/courses/enroll');
let findOneCourse = require('./../middlewares/courses/find');
let closeCourse = require('./../middlewares/courses/close');

router.post('/course', createMW ); // OK
router.get('/course', listCoursesMW ); // OK
router.post('/course/:id', deleteMW ); // OK
router.get('/course/open', openCoursesMW ); // OK
router.post('/course/enroll/:idCurso/:idAlumno/', enrollToCourse); // NOT OK
router.get('/course/:id', findOneCourse); // OK
router.post('/course/close/:id', closeCourse); // OK

module.exports = router;