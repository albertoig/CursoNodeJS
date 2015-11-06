"use strict";

let courses = require('./../../managers/course');

module.exports = (() => {
    return (req, res, next) => {
        courses.closeCourse(req.params.id, function(text) {
            res.send(text);
        })
    }
})();