'use strict';

let sanitize = (str, strToClean) => {
    let reg = new RegExp(strToClean, 'g');
    return str.replace(reg, '');
};

module.exports = sanitize;