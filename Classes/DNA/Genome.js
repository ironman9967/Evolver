
var util = require('util');

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
};

Genome.prototype._addChromosome = function (chromosome) {
    this.emit('addElement', chromosome);
};

Genome.prototype._dispose = function () {
	this._limitedArray._dispose.call(this);
};

module.exports = Genome;
