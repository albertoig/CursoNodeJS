"use strict";

let students = require('./../../managers/student');

module.exports = (() => {
    return (req, res, next) => {
        students.create(req.body, function(err, student) {
            if(err) return next(err);
            res.send(student);
        })
    }
})();