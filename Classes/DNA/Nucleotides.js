
var util = require('util');

var BaseClass = require('../Base/BaseClass');

function Nucleotides () {
    if ((this instanceof Nucleotides) === false) {
        return new Nucleotides();
    }
    BaseClass.call(this);

	this.dominance = undefined;
	this.A = undefined;
	this.T = undefined;
	this.G = undefined;
	this.C = undefined;
}
util.inherits(Nucleotides, BaseClass);

module.exports = Nucleotides;
