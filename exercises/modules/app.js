'use strict';

const convert = require('./convert.js');
const frecuency = require('./countWordFrecuency');
const sanitize = require('./sanitize');

let convertTest = convert('Prueba del primer punto.');
let sanitizeTest = sanitize('Test de prueba para hacer test del segundo punto.', ' ');
let frecuencyTest = frecuency('test', 'Test de prueba para hacer test del tercer punto.');

console.log(convertTest);
console.log(sanitizeTest);
console.log(frecuencyTest);
