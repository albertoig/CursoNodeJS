"use strict";

module.exports = (() => {
    return (req, res, next) => {
        console.log('validate middleware');
        return next();
    }
})();