
var util = require('util');

var BaseClass = require('../Base/BaseClass');

var BasePair = require('./BasePair');

function Gene(numberOfBasePairs) {
	if ((this instanceof Gene) === false) {
		return new Gene(numberOfBasePairs);
	}
	BaseClass.call(this);
	this._baseClass = BaseClass.prototype;

	this.StartCodon = 0;
	this._basePairs = [];
	this._numberOfBasePairs = numberOfBasePairs;
	this._stopCodon = 0;

	this._setupEvents();
}
util.inherits(Gene, BaseClass);

Gene.prototype._setupEvents = function () {
	this._baseClass._setupEvents.call(this);
	
	var instance = this;
	this.on('addBasePair', function () {
		instance._addBasePair.apply(arguments);
	});
	this.on('setStartCodon', function () {
		instance._setStartCodon.apply(arguments);
	});
};

Gene.prototype._addBasePair = function (basePair) {
	if (this._basePairs.length < this._numberOfBasePairs) {
		this._stopCodon++;
		this._basePairs.push(basePair);
		if (this._basePairs.length === this._numberOfBasePairs) {
			this.emit('complete', this);
		}
	}
	else {
		this.emit('error', {
			message: "Cannot add any more base pairs"
		});
	}
};
Gene.prototype._setStartCodon = function (index) {
	this.StartCodon = index;
	this._stopCodon += index;
};

Gene.prototype._dispose = function () {
	this._baseClass._dispose.call(this);
};

module.exports = Gene;
