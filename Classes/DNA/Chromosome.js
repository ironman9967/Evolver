
var util = require('util');

var _ = require('lodash');

var LimitedArray = require('./LimitedArray');

function Chromosome(numberOfGenes) {
	if ((this instanceof Chromosome) === false) {
		return new Chromosome(numberOfGenes);
	}
    LimitedArray.call(this, numberOfGenes);
	this._limitedArray = LimitedArray.prototype;

	this._setupEvents();
}
util.inherits(Chromosome, LimitedArray);

Chromosome.prototype._setupEvents = function () {
    this._limitedArray._setupEvents.call(this);
    var instance = this;

	this.on('addGene', function () {
		instance._addGene.apply(instance, arguments);
	});
};

Chromosome.prototype._addGene = function (gene) {
    var instance = this;
    this.emit('addElement', gene, function () {
        var lastGene = instance._elements[instance._elements.length - 2];
        if (!_.isUndefined(lastGene)) {
            gene.emit('setStartCodon', lastGene.StopCodon);
        }
    });
};

Chromosome.prototype._dispose = function () {
	this._baseClass._dispose.call(this);
};

module.exports = Chromosome;
