"use strict";

let students = require('./../../managers/student');

module.exports = (() => {
    return (req, res, next) => {
        students.deleteStudent(req.params.id, (student) => {
            res.send(student);
        })
    }
})();