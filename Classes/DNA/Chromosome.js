
var util = require('util');

var _ = require('lodash');

var BaseClass = require('../Base/BaseClass');

function Chromosome(numberOfGenes) {
	if ((this instanceof Chromosome) === false) {
		return new Chromosome(numberOfGenes);
	}
	BaseClass.call(this);
	this._baseClass = BaseClass.prototype;

	this._genes = [];
	this._numberOfGenes = numberOfGenes;

	this._setupEvents();
}
util.inherits(Chromosome, BaseClass);

Chromosome.prototype._setupEvents = function () {
	this._baseClass._setupEvents.call(this);

	var instance = this;
	this.on('addGene', function () {
		instance._addGene.apply(arguments);
	});
};

Chromosome.prototype._addGene = function (gene) {
	var lastGene = instance._genes[instance._genes.length - 1];
	if (!_.isUndefined(lastGene)) {
		gene.emit('setStartCodon', lastGene.StartCodon);
	}
	instance._genes.push(gene);
};

Chromosome.prototype._dispose = function () {
	this._baseClass._dispose.call(this);
};

module.exports = Chromosome;
