var Promise = require('bluebird');
var db = Promise.promisifyAll(require('./database.js'));
var errors = require('../../lib/errors');

module.exports = {
    /**
     * Returns an object from database related to 'nameUrl' param in the output format.
     *
     * @param {string} nameUrl - name url of the object to find
     * @returns {Object} Returns an output structure with the following fields:
     *  - name {string} - name of the original object
     *  - properties {Object}: collection of simple properties of the original object, e.g.
     *   { "Front Camera Megapixel": "1.3 MP", "cores": 4 }
     *  - embeddedObjects {Array}: array of embedded objects in the output format
     */
    findByNameUrl: function (nameUrl) {
        return db.findByNameUrlAsync([nameUrl])
            .then(function (objects) {
                if (!objects.length) {
                    return Promise.reject(new errors.RecordNotFound());
                }

                return transform(objects[0]);
            });
    }
};

/**
 * Transforms database object to output structure with the following fields:
 *  - name {string} - name of the original object
 *  - properties {Object}: collection of simple properties of the original object, e.g.
 *   { "Front Camera Megapixel": "1.3 MP", "cores": 4 }
 *  - embeddedObjects {Array}: array of embedded objects in the output format
 *
 * @param {Object} object - database object
 * @returns {Promise}
 */
function transform(object) {
    if (!object.name) {
        return Promise.reject(new errors.InvalidData('Name field is required'));
    }

    if (!object.properties) {
        return Promise.resolve({
            name: object.name
        });
    }

    var result = {
        name: object.name,
        properties: {},
        embeddedObjects: []
    };

    return db.findByNameAsync(Object.keys(object.properties))
        .then(function (propertyObjects) {
            var transformationPromises = [];

            propertyObjects.forEach(function (propertyObject) {
                if (isSimpleProperty(propertyObject)) {
                    result.properties[propertyObject.name] =
                        formatSimplePropertyValue(propertyObject, object.properties[propertyObject.name]);
                } else {
                    transformationPromises.push(transform(propertyObject));
                }
            });

            return Promise.all(transformationPromises)
                .then(function (embededObjects) {
                    result.embeddedObjects = embededObjects;
                    return result;
                });
        });
}

/**
 * Checks if object is classified as a simple property (not an embedded object).
 *
 * @param {Object} object - database object
 * @returns {boolean}
 */
function isSimpleProperty(object) {
    return !object.hasOwnProperty('name_url');
}

/**
 * Returns a simple property value followed by the unit
 *
 * @param {Object} property - database object which represents a simple property
 * @param {any} value - value of a simple property
 * @returns {string}
 */
function formatSimplePropertyValue(property, value) {
    var result = value;
    if(property.unit) {
        result = result + ' ' + property.unit;
    }
    return result;
}