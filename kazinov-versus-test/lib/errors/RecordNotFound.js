var util = require('util');

function RecordNotFound(message) {
    this.name = this.constructor.name;
    this.message = message || 'Record not found';
}

util.inherits(RecordNotFound, Error);

module.exports = RecordNotFound;