'use strict';

const os = require('os');

const nuname = function(param) {
    switch(param) {
        case 'r':
            return os.release();
        case 's':
            return os.type();
        case 'n':
            return os.hostname();
    }
};

module.exports = nuname;
