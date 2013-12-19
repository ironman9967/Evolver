
var util = require('util');

var BaseClass = require('../Base/BaseClass');

var Nucleotide = require('./Nucleotide');

function BasePair(nucleotide1, nucleotide2) {
	if ((this instanceof BasePair) === false) {
		return new BasePair(nucleotide1, nucleotide2);
	}
	BaseClass.call(this);
	this._baseClass = BaseClass.prototype;

	this._pair = [
		nucleotide1,
		nucleotide2
	];

	this._setupEvents();
}
util.inherits(BasePair, BaseClass);

BasePair.prototype._setupEvents = function () {
	this._baseClass._setupEvents.call(this);
};

BasePair.prototype._dispose = function () {
	this._baseClass._dispose.call(this);
};

module.exports = BasePair;
