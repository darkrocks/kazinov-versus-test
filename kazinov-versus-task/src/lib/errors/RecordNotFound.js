var util = require('util');

function RecordNotFound(message) {
    this.name = this.constructor.name;
    this.message = 'Record not found';
    if (message) {
        this.message += ': ' + message;
    }
}

util.inherits(RecordNotFound, Error);

module.exports = RecordNotFound;