
exports.BaseClassTests = {
	setUp: function (callback) {
		this._ = require('lodash');
		this.BaseClass = require('../../../Classes/Base/BaseClass');
		this.baseClass = new this.BaseClass();
		callback();
	},
	tearDown: function (callback) {
		this._ = undefined;
		this.BaseClass = undefined;
		callback();
	},
	providedId: function (test) {
		var id = "providedID";
		this.baseClass = new this.BaseClass(id);
		test.expect(1);
		test.ok(this.baseClass.id === id, "Base class objects must assign the provided ID to a property called 'id'");
		test.done();
	},
	randomId: function (test) {
		test.expect(1);
		test.ok(!this._.isUndefined(this.baseClass.id), "Base class objects must assign a random ID property, if one " +
			"is not provided");
		test.done();
	},
	eventEmitterChild: function (test) {
		test.expect(2);
		test.ok(!this._.isUndefined(this.baseClass.on) && typeof this.baseClass.on === "function", "Base class must " +
			"inherit 'events.EventEmitter. No 'on' function found.");
		test.ok(!this._.isUndefined(this.baseClass.emit) && typeof this.baseClass.emit === "function", "Base class " +
			"must inherit 'events.EventEmitter'. No 'emit' function found.");
		test.done();
	},
	testEvent: function (test) {
		test.expect(1);
		var value = 0;
		this.baseClass.on('test', function () {
			value = 1;
		});
		this.baseClass.emit('test');
		setTimeout(function () {
			test.ok(value === 1, "Test event not fired. 'value' not equal to '1'.");
			test.done();
		}, 100);
	}
};
