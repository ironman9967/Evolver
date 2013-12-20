
function GeneDefinition(name) {
	if ((this instanceof GeneDefinition) === false) {
		return new GeneDefinition(name);
	}

	this.Name = name;
	this.BasePairDefinitions = [];
}

module.exports = GeneDefinition;
