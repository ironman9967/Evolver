
var util = require('util');

var BaseClass = require('../Base/BaseClass');

function Nucleotides (type) {
    if ((this instanceof Nucleotides) === false) {
        return new Nucleotides(type);
    }
    BaseClass.call(this);

    this._type = type;
}
util.inherits(Nucleotides, BaseClass);

module.exports = Nucleotides;
