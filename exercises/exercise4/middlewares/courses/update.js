"use strict";

let courses = require('./../../managers/course');

module.exports = (() => {
    return (req, res, next) => {
        console.log('resolve middleware');
        res.status(200).send('ok');
    }
})();