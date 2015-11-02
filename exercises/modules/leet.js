'use strict';

let leet = (str) => {

    let result = str;
    let alphabets = {
        "a": "4",
        "b": "8",
        "e": "3",
        "g": "6",
        "i": "1",
        "o": "0",
        "s": "5",
        "t": "7"
    };

    Object.keys(alphabets).map((value, index) => {
        let reg = new RegExp(value, 'g');
        result = result.replace(reg, alphabets[value]);
    });

    return result;
};


module.exports = leet;