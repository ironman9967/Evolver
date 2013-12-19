
var util = require('util');

var BaseClass = require('../Base/BaseClass');

function Nucleotides () {
    if ((this instanceof Nucleotides) === false) {
        return new Nucleotides();
    }
    BaseClass.call(this);
}
util.inherits(Nucleotides, BaseClass);

module.exports = Nucleotides;
