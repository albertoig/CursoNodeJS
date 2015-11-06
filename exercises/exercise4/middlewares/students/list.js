"use strict";

let students = require('./../../managers/student');

module.exports = (() => {
    return (req, res, next) => {
        students.listAllStudent(function(student) {
            res.send(student);
        })
    }
})();