"use strict";

let courses = require('./../../managers/course');

module.exports = (() => {
    return (req, res, next) => {
        courses.enroll(req.params, (course) => {
            res.send(course);
        })
    }
})();