
var util = require('util');

var _ = require('lodash');

var BaseClass = require('../../Base/BaseClass');

var Chromosome = require('../Objects/Chromosome');

function Genome(definition, generate) {
	if ((this instanceof Genome) === false) {
		return new Genome(definition);
	}
	BaseClass.call(this);
	this._baseClass = BaseClass.prototype;

	this.Definition = definition;
	this.Chromosomes = {};

	this._setupEvents();
	if (!_.isUndefined(generate) && generate) {
		this._applyDefinition();
	}
}
util.inherits(Genome, BaseClass);

Genome.prototype._setupEvents = function () {
	this._baseClass._setupEvents.call(this);
};

Genome.prototype._applyDefinition = function () {
	var instance = this;
	_.each(this.Definition.ChromosomeDefinitions, function (chromosomeDefinition) {
		instance.Chromosomes[chromosomeDefinition.Name] = new Chromosome(chromosomeDefinition, true);
	});
};

Genome.prototype._dispose = function () {
	this._baseClass._dispose.call(this);
};

module.exports = Genome;