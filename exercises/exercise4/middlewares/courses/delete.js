"use strict";

let courses = require('./../../managers/course');

module.exports = (() => {
    return (req, res, next) => {
        let id = req.params.id;
        courses.deleteCourse(id, (idRemoved) => {
            res.send(`Curso con ID ${idRemoved} eliminado`);
        });
    }
})();