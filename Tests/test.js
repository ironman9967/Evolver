
var _ = require('lodash');

var BasePairDefinition = require('../Classes/DNA/Definitions/BasePairDefinition');
var GeneDefinition = require('../Classes/DNA/Definitions/GeneDefinition');
var ChromosomeDefinition = require('../Classes/DNA/Definitions/ChromosomeDefinition');
var GenomeDefinition = require('../Classes/DNA/Definitions/GenomeDefinition');
var Genome = require('../Classes/DNA/Objects/Genome');
var Organism = require('../Classes/Evolution/Organism');

var testName = "Heat Tolerance";
var goal = 50;
var lifeSpan = 10;
var numOfOrganisms = 10000;

var basePairDefinition1 = new BasePairDefinition(testName);
basePairDefinition1.Elements = _.range(1, 101);

var geneDefinition1 = new GeneDefinition(testName);
geneDefinition1.BasePairDefinitions.push(basePairDefinition1);

var chromosomeDefinition1 = new ChromosomeDefinition(testName, function (c1, c2) {
	var c1Diff = Math.abs(c1.Genes[testName].Phenotype - goal);
	var c2Diff = Math.abs(c2.Genes[testName].Phenotype - goal);
	return c1Diff <= c2Diff ? c1 : c2;
});
chromosomeDefinition1.GeneDefinitions.push(geneDefinition1);

var genomeDefinition1 = new GenomeDefinition(testName);
genomeDefinition1.ChromosomeDefinitions.push(chromosomeDefinition1);

var organisms = [];

for (var i = 0; i < numOfOrganisms; i++) {
	organisms.push(new Organism(new Genome(genomeDefinition1, true)));
}


console.log("STARTING FITNESS TEST: " + testName);
console.log("-- population size: " + numOfOrganisms);
console.log("-- goal is to have " + testName + " of " + goal);
console.log("-- breed cycle/lifespan: ~" + lifeSpan + "ms");

setTimeout(function () {
    setInterval(function () {
        organisms.pop();
    }, lifeSpan);

    setInterval(function () {
        organisms.push(organisms[0].Breed(organisms[1]));
        organisms = _.shuffle(organisms);
    }, lifeSpan);

    var stamp = (new Date()).getTime();
    var interval = setInterval(function () {
        var min = _.min(organisms,function (o) {
            return o.Genome.Chromosomes[testName].Genes[testName].Phenotype;
        }).Genome.Chromosomes[testName].Genes[testName].Phenotype;
        var max = _.max(organisms,function (o) {
            return o.Genome.Chromosomes[testName].Genes[testName].Phenotype;
        }).Genome.Chromosomes[testName].Genes[testName].Phenotype;
        console.log(testName + " population min: " + min + " --- " + testName + " population max: " + max);
        if (min === goal && max === goal) {
            console.log("ALL ORGANISMS ARE PERFECT: ~" + Math.floor(((new Date()).getTime() - stamp) / 1000) + " seconds");
            clearInterval(interval);
        }
    }, lifeSpan * 50);
}, 6000);