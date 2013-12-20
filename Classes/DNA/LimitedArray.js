
var util = require('util');

var _ = require('lodash');

var BaseClass = require('../Base/BaseClass');

function LimitedArray(numberOfElements) {
	if ((this instanceof LimitedArray) === false) {
		return new LimitedArray(numberOfElements);
	}
	BaseClass.call(this);
	this._baseClass = BaseClass.prototype;

    this._numberOfElements = numberOfElements;
    this._elements = [];
}
util.inherits(LimitedArray, BaseClass);

LimitedArray.prototype._setupEvents = function () {
	this._baseClass._setupEvents.call(this);

    var instance = this;
    this.on('addElement', function () {
        instance._addElement.apply(instance, arguments);
    });
};

LimitedArray.prototype._addElement = function (element, callback) {
    if (this._elements.length < this._numberOfElements) {
        this._elements.push(element);
        if (!_.isUndefined(callback)) {
            callback();
        }
        if (this._elements.length === this._numberOfElements) {
            this.emit('complete');
        }
    }
    else {
        this.emit('error', {
            error: "Cannot add another element"
        });
    }
};

LimitedArray.prototype._dispose = function () {
	this._baseClass._dispose.call(this);
};

module.exports = LimitedArray;
