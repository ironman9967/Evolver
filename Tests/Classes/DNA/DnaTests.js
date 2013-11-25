
exports.DnaTests = {
    setUp: function (callback) {
		this._ = require('lodash');
		this.Dna = require('../../../Classes/DNA/Dna');
        callback();
    },
    tearDown: function (callback) {
		this._ = undefined;
		this.Dna = undefined;
        callback();
    },
	test: function (test) {
		test.ok(true);
		test.done();
	}
};