
var util = require('util');

var _ = require('lodash');

var LimitedArray = require('./LimitedArray');

function Genome(numberOfChromosomes) {
	if ((this instanceof Genome) === false) {
		return new Genome(numberOfChromosomes);
	}
    LimitedArray.call(this, numberOfChromosomes);
	this._limitedArray = LimitedArray.prototype;

	this._setupEvents();
}
util.inherits(Genome, LimitedArray);

Genome.prototype._setupEvents = function () {
	this._limitedArray._setupEvents.call(this);
    var instance = this;

    this.on('addChromosome', function () {
        instance._addChromosome.apply(instance, arguments);
    });
    this.on('outcome', function () {
        instance._outcome.apply(instance, arguments);
    });
};

Genome.prototype._addChromosome = function (chromosome) {
    this.emit('addElement', chromosome);
};
Genome.prototype._outcome = function (callback) {
    var chromosomeOutcomes = [];
    var instance = this;
    _.each(this._elements, function (chromosome) {
        chromosome.emit('outcome', function (outcome) {
            chromosomeOutcomes.push(outcome);
            checkOutcomes(chromosomeOutcomes, instance._elements.length, callback);
        });
    });
};
function checkOutcomes(outcomes, total, callback) {
    if (outcomes.length === total) {
        callback(_.flatten(outcomes));
    }
}

Genome.prototype._dispose = function () {
	this._limitedArray._dispose.call(this);
};

module.exports = Genome;
