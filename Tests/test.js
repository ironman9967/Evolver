
var _ = require('lodash');

var BasePairDefinition = require('../Classes/DNA/Definitions/BasePairDefinition');
var GeneDefinition = require('../Classes/DNA/Definitions/GeneDefinition');
var ChromosomeDefinition = require('../Classes/DNA/Definitions/ChromosomeDefinition');
var GenomeDefinition = require('../Classes/DNA/Definitions/GenomeDefinition');
var Genome = require('../Classes/DNA/Objects/Genome');
var Organism = require('../Classes/Evolution/Organism');

var basePairDefinition1 = new BasePairDefinition("Heat Tolerance");
basePairDefinition1.Elements = _.range(5, 16);

var geneDefinition1 = new GeneDefinition("Heat Tolerance");
geneDefinition1.BasePairDefinitions.push(basePairDefinition1);

var chromosomeDefinition1 = new ChromosomeDefinition("Heat Tolerance", function (c1, c2) {
	var c1Diff = Math.abs(c1.Genes["Heat Tolerance"].Phenotype - 10);
	var c2Diff = Math.abs(c2.Genes["Heat Tolerance"].Phenotype - 10);
	return c1Diff <= c2Diff ? c1 : c2;
});
chromosomeDefinition1.GeneDefinitions.push(geneDefinition1);

var genomeDefinition1 = new GenomeDefinition("Heat Tolerance");
genomeDefinition1.ChromosomeDefinitions.push(chromosomeDefinition1);

var numOfOrganisms = 1000;
var organisms = [];

for (var i = 0; i < numOfOrganisms; i++) {
	organisms.push(new Organism(new Genome(genomeDefinition1, true)));
}

var lifeSpan = 5;

setInterval(function () {
	organisms.pop();
}, lifeSpan);

setInterval(function () {
	organisms.push(organisms[0].Breed(organisms[1]));
	organisms = _.shuffle(organisms);
}, lifeSpan);

setInterval(function () {
	var min = _.min(organisms, function (o) {
		return o.Genome.Chromosomes["Heat Tolerance"].Genes["Heat Tolerance"].Phenotype;
	}).Genome.Chromosomes["Heat Tolerance"].Genes["Heat Tolerance"].Phenotype;
	var max = _.max(organisms, function (o) {
		return o.Genome.Chromosomes["Heat Tolerance"].Genes["Heat Tolerance"].Phenotype;
	}).Genome.Chromosomes["Heat Tolerance"].Genes["Heat Tolerance"].Phenotype;
	console.log(min + " : " + max);
}, lifeSpan * 200);


