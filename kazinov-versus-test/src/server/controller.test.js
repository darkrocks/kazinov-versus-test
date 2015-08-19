var express = require('express');
var assert = require('assert');
var request = require('supertest-as-promised');
var routes = require('./routes');

function setupTest() {
    var app = express();
    routes.configure(app);
    return app;
}

var app = setupTest();

describe('module: controller', function () {
    describe('method: findByNameUrl()', function () {
        it('should return 200 response for nameUrl android-4-4-kitkat', function () {
            return request(app)
                .get('/api/android-4-4-kitkat')
                .expect(200);
        });

        it('should return proper data for nameUrl android-4-4-kitkat', function (done) {
            return request(app)
                .get('/api/android-4-4-kitkat')
                .then(function (res) {
                    assert.equal(JSON.stringify(res.body), JSON.stringify({
                        name: 'Android 4.4 KitKat',
                        properties: {
                            '4k': true,
                            'widgets': true,
                            'apps': 1000000,
                            'opengl_es_3_0': true,
                            'customize_notifications': true,
                            'offline_voice_recognition': true
                        },
                        embeddedObjects: []
                    }));
                    done();
                })
                .catch(done);
        });

        it('should return proper data for nameUrl nexus-5', function (done) {
            return request(app)
                .get('/api/nexus-5')
                .then(function (res) {
                    assert.equal(res.body.name, 'Nexus 5');
                    assert.ok(!res.body['name_url']);
                    assert.equal(res.body.properties['compass'], true);
                    assert.equal(res.body.properties['clock_speed'], 2.3);
                    assert.equal(res.body.properties['cores'], 4);
                    assert.equal(res.body.properties['front_camera_megapixel'], '1.3 MP');
                    assert.equal(res.body.properties['gps'], true);
                    assert.equal(res.body.properties['ram'], '2 GB');
                    assert.equal(res.body.properties['weight'], '130 g');
                    assert.equal(res.body.embeddedObjects.length, 2);

                    var androidEmbededObject = res.body.embeddedObjects.filter(function(o) {
                        return o.name === 'Android 4.4 KitKat';
                    })[0];
                    assert.equal(androidEmbededObject.name, 'Android 4.4 KitKat');
                    assert.ok(!androidEmbededObject['name_url']);
                    assert.equal(androidEmbededObject.properties['4k'], true);
                    assert.equal(androidEmbededObject.properties['widgets'], true);
                    assert.equal(androidEmbededObject.properties['apps'], 1000000);
                    assert.equal(androidEmbededObject.properties['opengl_es_3_0'], true);
                    assert.equal(androidEmbededObject.properties['customize_notifications'], true);
                    assert.equal(androidEmbededObject.properties['offline_voice_recognition'], true);

                    var qualcommSnapdragon800EmbededObject = res.body.embeddedObjects.filter(function(o) {
                        return o.name === 'Qualcomm Snapdragon 800 MSM8974AA v2';
                    })[0];
                    assert.equal(qualcommSnapdragon800EmbededObject.name, 'Qualcomm Snapdragon 800 MSM8974AA v2');
                    assert.ok(!qualcommSnapdragon800EmbededObject['name_url']);
                    assert.equal(qualcommSnapdragon800EmbededObject.properties['cpu_threads'], 4);
                    assert.equal(qualcommSnapdragon800EmbededObject.properties['semiconductor_size'], 28);
                    assert.equal(qualcommSnapdragon800EmbededObject.properties['max_mem_bandwidth'], 12.8);
                    assert.equal(qualcommSnapdragon800EmbededObject.embeddedObjects.length, 2);

                    var qualcommAdreno330EmbededObject = qualcommSnapdragon800EmbededObject.embeddedObjects.filter(function(o) {
                        return o.name === 'Qualcomm Adreno 330 (450MHz)';
                    })[0];
                    assert.equal(qualcommAdreno330EmbededObject.name, 'Qualcomm Adreno 330 (450MHz)');
                    assert.ok(!qualcommAdreno330EmbededObject['name_url']);
                    assert.equal(qualcommAdreno330EmbededObject.properties['openvg_version'], 3);
                    assert.equal(qualcommAdreno330EmbededObject.properties['gpu_clock_speed'], 450);

                    var qualcommKrait400EmbededObject = qualcommSnapdragon800EmbededObject.embeddedObjects.filter(function(o) {
                        return o.name === 'Qualcomm Krait 400';
                    })[0];
                    assert.equal(qualcommKrait400EmbededObject.name, 'Qualcomm Krait 400');
                    assert.ok(!qualcommKrait400EmbededObject['name_url']);
                    assert.equal(qualcommKrait400EmbededObject.properties['virtualization'], true);
                    assert.equal(qualcommKrait400EmbededObject.properties['nxbit'], true);
                    done();
                })
                .catch(done);
        });

        it('should return 404 response for not existed nameUrl', function () {
            return request(app)
                .get('/api/unknows_name_url')
                .expect(404);
        });
    });
});