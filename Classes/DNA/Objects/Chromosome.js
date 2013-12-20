
var util = require('util');

var _ = require('lodash');

var BaseClass = require('../../Base/BaseClass');

var Gene = require('../Objects/Gene');

function Chromosome(definition, generate) {
	if ((this instanceof Chromosome) === false) {
		return new Chromosome(definition);
	}
	BaseClass.call(this);
	this._baseClass = BaseClass.prototype;

	this.Definition = definition;
	this.Genes = {};
	
	this._setupEvents();
	if (generate) {
		this._applyDefinition();
	}
}
util.inherits(Chromosome, BaseClass);

Chromosome.prototype._setupEvents = function () {
	this._baseClass._setupEvents.call(this);
};

Chromosome.prototype._applyDefinition = function () {
	var instance = this;
	_.each(this.Definition.GeneDefinitions, function (geneDefinition) {
		instance.Genes[geneDefinition.Name] = new Gene(geneDefinition, true);
	});
};

Chromosome.prototype.Combine = function (partnersChromosome) {
	return this.Definition.DetermineDominance(this, partnersChromosome);
};

Chromosome.prototype._dispose = function () {
	this._baseClass._dispose.call(this);
};

module.exports = Chromosome;