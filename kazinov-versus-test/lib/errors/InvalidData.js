var util = require('util');

function InvalidData(message) {
    this.name = this.constructor.name;
    this.message = 'Invalid data';
    if (message) {
        this.message += ': ' + message;
    }
}

util.inherits(InvalidData, Error);

module.exports = InvalidData;