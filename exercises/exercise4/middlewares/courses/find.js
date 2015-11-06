"use strict";

let courses = require('./../../managers/course');

module.exports = (() => {
    return (req, res, next) => {
        courses.listOneCourse(req.params.id,(course)=>{
            res.send(course);
        });
    }
})();