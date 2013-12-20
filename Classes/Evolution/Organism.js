
var util = require('util');

var _ = require('lodash');

var BaseClass = require('../Base/BaseClass');

var Genome = require('../DNA/Objects/Genome');

function Organism(genome) {
	if ((this instanceof Organism) === false) {
		return new Organism(genome);
	}
	BaseClass.call(this);
	this._baseClass = BaseClass.prototype;

	this.Genome = genome;
	
	this._setupEvents();
}
util.inherits(Organism, BaseClass);

Organism.prototype._setupEvents = function () {
	this._baseClass._setupEvents.call(this);
};

Organism.prototype.Breed = function (partener) {
	var child = new Organism(new Genome(this.Genome.Definition));
	_.each(this.Genome.Chromosomes, function (myChromosome, key) {
		child.Genome.Chromosomes[key] = myChromosome.Combine(partener.Genome.Chromosomes[key]);
	});
	return child;
};

Organism.prototype._dispose = function () {
	this._baseClass._dispose.call(this);
};

module.exports = Organism;
