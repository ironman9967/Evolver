
function BasePairDefinition(name) {
	if ((this instanceof BasePairDefinition) === false) {
		return new BasePairDefinition(name);
	}

	this.Name = name;
	this.Elements = [];
}

module.exports = BasePairDefinition;
