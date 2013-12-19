
var util = require('util');

var BaseClass = require('[PATH TO Parent]/BaseClass');

function Genome() {
	if ((this instanceof Genome) === false) {
		return new Genome();
	}
	BaseClass.call(this);
	this._baseClass = BaseClass.prototype;

	this._genes = [];

	this._setupEvents();
}
util.inherits(Genome, BaseClass);

Genome.prototype._setupEvents = function () {
	this._baseClass._setupEvents.call(this);
};

Genome.prototype._dispose = function () {
	this._baseClass._dispose.call(this);
};

module.exports = Genome;
