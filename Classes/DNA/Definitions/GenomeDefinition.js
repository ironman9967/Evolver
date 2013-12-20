
function GenomeDefinition(name) {
	if ((this instanceof GenomeDefinition) === false) {
		return new GenomeDefinition(name);
	}

	this.Name = name;
	this.ChromosomeDefinitions = [];
}

module.exports = GenomeDefinition;
