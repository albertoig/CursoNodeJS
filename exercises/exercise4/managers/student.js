'use strict';

const Student = require('../models/student');

let create = (data, cb) => {
    let student = new Student(data);
    return student.save(cb);
};

let listAllStudent = (cb) => {
    Student.find({}, (error,student) => {
        if(error){
            console.log(error);
        }
        return cb(student);
    });
};

let listOneStudent = (id, cb) => {
    Student.find({_id:id}, (error,student) => {
        if(error){
            console.log(error);
        }
        return cb(student);
    });
};

let deleteStudent = (data, cb) => {
    Student.remove({ _id: id }, function(error) {
        let text = `Student with id ${id} deleted`;
        return cb(text);
    });
};

module.exports = {
    create,
    listAllStudent,
    listOneStudent,
    deleteStudent
};