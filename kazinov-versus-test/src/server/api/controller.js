var repository = require('../data/repository');
var errors = require('../../lib/errors');

module.exports = {
    findByNameUrl: function (request, response) {
        var nameUrl = request.params.nameUrl;
        return repository.findByNameUrl(nameUrl)
            .then(function (object) {
                response.status(200).json(object);
            })
            .catch(errors.RecordNotFound, function (error) {
                response.status(404).json(error);
            })
            .catch(function(error) {
                response.status(500).json(error);
            });
    }
};

