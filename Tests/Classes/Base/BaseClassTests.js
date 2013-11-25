
exports.BaseClassTests = {
	setUp: function (callback) {
		this._ = require('lodash');
		this.BaseClass = require('../../../Classes/Base/BaseClass');
		callback();
	},
	tearDown: function (callback) {
		callback();
	},
	providedId: function (test) {
		var id = "providedID";
		var baseClass = new this.BaseClass(id);
		test.expect(1);
		test.ok(baseClass.id === id, "Base class objects must assign the provided ID to a property called 'id'");
		test.done();
	},
	randomId: function (test) {
		var baseClass = new this.BaseClass();
		test.expect(1);
		test.ok(!this._.isUndefined(baseClass.id), "Base class objects must assign a random ID property, if one is " +
			"not provided");
		test.done();
	},
	eventEmitterChild: function (test) {
		var baseClass = new this.BaseClass();
		test.expect(2);
		test.ok(!this._.isUndefined(baseClass.on) && typeof baseClass.on === "function", "Base class must inherit " +
			"'events.EventEmitter. No 'on' function found.");
		test.ok(!this._.isUndefined(baseClass.emit) && typeof baseClass.emit === "function", "Base class must " +
			"inherit 'events.EventEmitter'. No 'emit' function found.");
		test.done();
	}
};
