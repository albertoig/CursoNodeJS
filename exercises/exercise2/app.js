'use strict';

const argv = require('yargs').argv;
let reader = require('./reader');
let convert = require('./../exercise1/convert');
let leet = require('./../exercise1/leet');
let sanitize = require('./../exercise1/sanitize');
let countWordFrecuency = require('./../exercise1/sanitize');

let url = argv.url;
let convertArg = argv.convert;
let leetArg = argv.leet;
let sanitazeArg = argv.sanitaze;


if (url !== undefined) {
    reader(url);
}

if (convertArg !== undefined) {
    convert(url);
}

if (leetArg !== undefined) {
    leet(url);
}






