
var util = require('util');

var BaseClass = require('../Base/BaseClass');

function Nucleotides (type) {
    if ((this instanceof Nucleotides) === false) {
        return new Nucleotides(type);
    }
    BaseClass.call(this);

    this.Type = type;
}
util.inherits(Nucleotides, BaseClass);

Nucleotides.prototype._setupEvents = function () {
    this._baseClass._setupEvents.call(this);
};

Nucleotides.prototype._dispose = function () {
    this._baseClass._dispose.call(this);
};

module.exports = Nucleotides;
