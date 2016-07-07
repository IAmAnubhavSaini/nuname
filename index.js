'use strict';

const os = require('os');

const uname = function(param) {
    switch(param) {
        case 'r':
            return os.release();
        case 's':
            return os.type();
    }
};

module.exports = uname;
