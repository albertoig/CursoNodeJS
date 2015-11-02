const fs = require('fs');
const file = require('./test.txt');

fs.readFile(file, (error, data) => {
    if(error){
        throw error
    }

    console.log(data);
});