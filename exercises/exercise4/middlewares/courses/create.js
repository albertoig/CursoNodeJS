"use strict";

let courses = require('./../../managers/course');

module.exports = (() => {
    return (req, res, next) => {
        courses.create(req.body, function(err, course) {
            if(err) return next(err);
            res.send(course);
        })
    }
})();