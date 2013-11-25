
exports.NucleotidesTests = {
    setUp: function (callback) {
		this._ = require('lodash');
		this.Nucleotides = require('../../../Classes/DNA/Nucleotides');
		this.nucleotides = new this.Nucleotides();
        callback();
    },
    tearDown: function (callback) {
        callback();
    },
	baseClassChild: function (test) {
		test.expect(1);
		test.ok(!this._.isUndefined(this.nucleotides.id), "'Nucleotides' must be a child of 'BaseClass'. 'id' property not " +
			"found.");
		test.done();
	},
	dominance: function (test) {
		test.expect(1);
		test.ok(!this._.isUndefined(this.nucleotides.dominance, "'Nucleotides' must have a 'dominance' property"));
		test.done();
	},
	A: function (test) {
		test.expect(1);
		test.ok(!this._.isUndefined(this.nucleotides.A, "'Nucleotides' must have an 'A' property"));
		test.done();
	},
	T: function (test) {
		test.expect(1);
		test.ok(!this._.isUndefined(this.nucleotides.T, "'Nucleotides' must have an 'T' property"));
		test.done();
	},
	G: function (test) {
		test.expect(1);
		test.ok(!this._.isUndefined(this.nucleotides.G, "'Nucleotides' must have an 'G' property"));
		test.done();
	},
	C: function (test) {
		test.expect(1);
		test.ok(!this._.isUndefined(this.nucleotides.C, "'Nucleotides' must have an 'C' property"));
		test.done();
	},
	initialization: function (test) {
		test.expect(5);
		this.nucleotides.emit('initialize', true, true, true, true, true);
		var instance = this;
		setTimeout(function () {
			test.ok(instance.nucleotides.dominance === true, "'dominance' not equal to '1'");
			test.ok(instance.nucleotides.A === true, "'A' not equal to '1'");
			test.ok(instance.nucleotides.T === true, "'T' not equal to '1'");
			test.ok(instance.nucleotides.G === true, "'G' not equal to '1'");
			test.ok(instance.nucleotides.C === true, "'C' not equal to '1'");
		}, 100);
	},
	combine: function (test) {
		test.expect(1);
		var other = new this.Nucleotides();
		this.nucleotides.emit('initialize', false, false, false, false, false);
		other.emit('initialize', true, true, true, true, true);
		this.nucleotides.emit('combine', other, function (result) {
			test.ok(result.id === other.nucleotides.id, "'other' is dominant and 'result' callback parameter's 'id' " +
				"did not equal it's 'id'");
			test.done();
		});
	}
};