var assert = require('assert');
var repository = require('./repository');
var errors = require('../lib/errors');

describe('module: repository', function () {
    describe('method: findByNameUrl()', function () {

        it('should return proper data for name url', function (done) {
            repository.findByNameUrl('android-4-4-kitkat')
                .then(function(data) {
                    assert.equal(JSON.stringify(data), JSON.stringify({
                        name: 'Android 4.4 KitKat',
                        name_url: 'android-4-4-kitkat',
                        properties: {
                            '4k': true,
                            'widgets': true,
                            'apps': 1000000,
                            'opengl_es_3_0': true,
                            'customize_notifications': true,
                            'offline_voice_recognition': true
                        }
                    }));
                    done();
                })
                .catch(done);
        });

        it('should return RecordNotFound error in an object doesnt exist', function (done) {
            repository.findByNameUrl('unexisted_name_url')
                .then(function () {
                    done('expected an error');
                })
                .catch(errors.RecordNotFound, function (err) {
                    assert.equal(err.message, 'Record not found');
                    done();
                });
        });
    });
});