'use strict';

const Course = require('../models/course');

const create = (data, cb) => {
    let course = new Course(data);
    return course.save(cb);
};

const listOpenCourses = (cb) => {
    Course.find({open:true},(error,course)=>{
        if(error){
            console.log(error);
        }
        return cb(course);
    });
};

const deleteCourse = (id,cb) => {
    Course.remove({ _id: id }, function(error) {
        if (error) {
            message.type = 'notification!';
        }
        return cb(id);
    });
};

const listAllCourses = (cb) => {
    Course.find({},(error,course)=>{
        if(error){
            console.log(error);
        }
        return cb(course);
    });
};

module.exports = {
    create,
    listOpenCourses,
    listAllCourses,
    deleteCourse
};