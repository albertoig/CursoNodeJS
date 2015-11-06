"use strict";

let courses = require('./../../managers/course');

module.exports = (() => {
    return (req, res, next) => {
        courses.listAllCourses((allCourses)=>{
            res.send(allCourses);
        });
    }
})();