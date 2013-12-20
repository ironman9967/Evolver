
var util = require('util');

var _ = require('lodash');

var BaseClass = require('../../Base/BaseClass');

function Gene(definition, generate) {
	if ((this instanceof Gene) === false) {
		return new Gene(definition);
	}
	BaseClass.call(this);
	this._baseClass = BaseClass.prototype;

	this.Definition = definition;
	this.Phenotype = {};

	this._setupEvents();
	if (generate) {
		this._applyDefinition();
	}
}
util.inherits(Gene, BaseClass);

Gene.prototype._setupEvents = function () {
	this._baseClass._setupEvents.call(this);
};

Gene.prototype._applyDefinition = function () {
	var instance = this;
	_.each(this.Definition.BasePairDefinitions, function (bpDefinition) {
		instance.Phenotype = bpDefinition.Elements[Math.floor(Math.random() * bpDefinition.Elements.length)];
	});
};

Gene.prototype._dispose = function () {
	this._baseClass._dispose.call(this);
};

module.exports = Gene;
