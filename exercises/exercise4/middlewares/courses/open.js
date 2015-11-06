"use strict";

let courses = require('./../../managers/course');

module.exports = (() => {
    return (req, res, next) => {
        courses.listOpenCourses((openCourses)=>{
            res.send(openCourses);
        });
    }
})();