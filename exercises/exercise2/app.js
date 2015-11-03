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
let countWordFrecuencyArg = argv.count;

if (url !== undefined) {
    reader(url);
}

if (convertArg !== undefined) {
    console.log(convert(convertArg));
}

if (leetArg !== undefined) {
    console.log(leet(leetArg));
}

if (sanitazeArg !== undefined) {
    console.log(sanitize(sanitazeArg,' '));
}

if (countWordFrecuencyArg !== undefined) {
    console.log(countWordFrecuency(countWordFrecuencyArg));
}








