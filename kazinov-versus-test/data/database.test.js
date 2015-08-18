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
});