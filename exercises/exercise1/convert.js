'use strict';

let convertToUpper = (str) => {

    let strSplited = str.split(' ');
    let resolution = '';

    strSplited.forEach((data)=>{
        resolution += data.charAt(0).toUpperCase() + data.slice(1) + ' ';
    });

    return resolution;
};

module.exports = convertToUpper;