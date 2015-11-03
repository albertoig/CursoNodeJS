'use strict';

let countWordFrecuency = (word, str) => {
    let reg = new RegExp(word, 'g');
    return str.match(reg).length;
};

module.exports = countWordFrecuency;