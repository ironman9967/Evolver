
var util = require('util');

var BaseClass = require('../Base/BaseClass');

function Dna () {
    if ((this instanceof Dna) === false) {
        return new Dna();
    }
    BaseClass.call(this);
}
util.inherits(Dna, BaseClass);

module.exports = Dna;
