'use strict';

const os = require('os');

const nuname = function(param) {
    switch(param) {
        case 'r':
            return os.release();
        case 's':
            return os.type();
    }
};

module.exports = nuname;
