
var util = require('util');

var LimitedArray = require('./LimitedArray');

function Gene(numberOfBasePairs) {
	if ((this instanceof Gene) === false) {
		return new Gene(numberOfBasePairs);
	}
    LimitedArray.call(this, numberOfBasePairs);
	this._limitedArray = LimitedArray.prototype;

	this.StartCodon = 0;
	this.StopCodon = 0;

	this._setupEvents();
}
util.inherits(Gene, LimitedArray);

Gene.prototype._setupEvents = function () {
	this._limitedArray._setupEvents.call(this);
    var instance = this;

    this.on('addBasePair', function () {
        instance._addBasePair.apply(instance, arguments);
    });
	this.on('setStartCodon', function () {
		instance._setStartCodon.apply(instance, arguments);
	});
};

Gene.prototype._addBasePair = function (basePair) {
    var instance = this;
    this.emit('addElement', basePair, function () {
        instance.StopCodon++;
    });
};
Gene.prototype._setStartCodon = function (index) {
	this.StartCodon += index + 1;
	this.StopCodon += index;
};

Gene.prototype._dispose = function () {
	this._baseClass._dispose.call(this);
};

module.exports = Gene;
