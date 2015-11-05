'use strict';

let router = require('express').Router();
let validate = require('./validateSquare');
let resolve = require('./resolveSquare');
let squareMW = [validate, resolve];

router.post('/square', squareMW);

module.exports = router;