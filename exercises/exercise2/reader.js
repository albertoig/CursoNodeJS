'use strict';

let rp = require('request-promise');
let fs = require('fs');

let reader = (url) => {
    rp(url)
        .then((output) => {
            fs.writeFile("./test.txt",output,function(){
                console.log("Everything is on the file.");
            });
        })
        .catch((error) => {
            console.log(error);
        });
};

module.exports = reader;



