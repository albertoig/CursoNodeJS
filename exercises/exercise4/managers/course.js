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

const listOneCourse = (id,cb) => {
    Course.find({_id:id},(error,course)=>{
        if(error){
            console.log(error);
        }
        return cb(course);
    });
};

const enroll = (params,cb) =>{
    let idCourse = params.idCourse;
    let idStudent = params.idStudent;

    return cb();
};

const closeCourse = (id,cb) =>{
    Course.findById(id, function (err, course) {
        if (err) return handleError(err);

        course.open = false;
        course.save(function (err) {
            if (err) return handleError(err);
            cb(course);
        });
    });
};

module.exports = {
    create,
    listOpenCourses,
    listAllCourses,
    deleteCourse,
    enroll,
    listOneCourse,
    closeCourse
};