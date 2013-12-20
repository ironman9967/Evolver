
function ChromosomeDefinition(name, determineDominance) {
	if ((this instanceof ChromosomeDefinition) === false) {
		return new ChromosomeDefinition(name);
	}

	this.Name = name;
	this.GeneDefinitions = [];
	this.DetermineDominance = determineDominance;
}

module.exports = ChromosomeDefinition;
