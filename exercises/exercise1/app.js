'use strict';

const convert = require('./convert.js');
const frecuency = require('./countWordFrecuency');
const sanitize = require('./sanitize');
const leet = require('./leet');

let convertTest = convert('prueba del primer punto.');
let sanitizeTest = sanitize('Test de prueba para hacer test del segundo punto.', ' ');
let frecuencyTest = frecuency('test', 'Test de prueba para hacer test del tercer punto.');

console.log('Convert: ' + convertTest);
console.log('Sanitize: ' + sanitizeTest);
console.log('Frecuency: ' + frecuencyTest);
console.log('l33t: ' + leet("hola, ¿Que tal estás?"));