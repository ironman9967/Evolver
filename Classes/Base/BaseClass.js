
var util = require('util');
var events = require('events');

var _ = require('lodash');

function BaseClass (id) {
    if ((this instanceof BaseClass) === false) {
        return new BaseClass(id);
    }
    events.EventEmitter.call(this);

	this.id = _.isUndefined(id) ? (require('wid')).NewWID(6) : id;
}
util.inherits(BaseClass, events.EventEmitter);

BaseClass.prototype._setupEvents = function () {};

BaseClass.prototype._dispose = function () {};

module.exports = BaseClass;
