var assert = require("assert");
var database = require("./database");

describe("module: database", function () {
    describe("method: findByName()", function () {

        it("should return proper data when one name specified", function (done) {
            database.findByName(["Qualcomm Krait 400"], function (err, data) {
                var filtered = data.filter(function(o) {
                    return o.name === "Qualcomm Krait 400";
                })
                assert.ok(filtered.length === 1);

                done();
            });
        });

        it("should return proper data when multiple names specified", function (done) {
            database.findByName(["Qualcomm Krait 400", "Qualcomm Adreno 330 (450MHz)"], function (err, data) {
                var filtered = data.filter(function(o) {
                    return o.name === "Qualcomm Krait 400";
                })
                assert.ok(filtered.length === 1);

                filtered = data.filter(function(o) {
                    return o.name === "Qualcomm Adreno 330 (450MHz)";
                })
                assert.ok(filtered.length === 1);
                done();
            });
        });
    });

    describe("method: findByNameUrl()", function () {
        it("should return proper data when one name url specified", function (done) {
            database.findByNameUrl(["qualcomm-snapdragon-800"], function (err, data) {
                var filtered = data.filter(function(o) {
                    return o.name === "Qualcomm Snapdragon 800 MSM8974AA v2";
                })
                assert.ok(filtered.length === 1);

                done();
            });
        });

        it("should return proper data when multiple name urls specified", function (done) {
            database.findByNameUrl(["android-4-4-kitkat", 'nexus-5'], function (err, data) {
                var filtered = data.filter(function(o) {
                    return o.name === "Android 4.4 KitKat";
                })
                assert.ok(filtered.length === 1);

                filtered = data.filter(function(o) {
                    return o.name === 'Nexus 5';
                })
                assert.ok(filtered.length === 1);
                done();
            });
        });
    });
});