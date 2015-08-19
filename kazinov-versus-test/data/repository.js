var Promise = require('bluebird');
var db = Promise.promisifyAll(require('./database.js'));
var errors = require('../lib/errors');

module.exports = {
    findByNameUrl: function (nameUrl) {
        return db.findByNameUrlAsync([nameUrl])
            .then(function (objects) {
                if (!objects.length) {
                    return Promise.reject(new errors.RecordNotFound());
                }

                return objects[0];
            });
    }
};