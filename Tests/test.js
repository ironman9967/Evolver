
var BasePairFactory = require('../Classes/DNA/BasePairFactory');
var Gene = require('../Classes/DNA/Gene');
var Chromosome = require('../Classes/DNA/Chromosome');
var Genome = require('../Classes/DNA/Genome');

function createOrgainism() {
    var gene1 = new Gene(2);
    gene1.on('error', logError);
    gene1.emit('addBasePair', BasePairFactory.GetBasePair());
    gene1.emit('addBasePair', BasePairFactory.GetBasePair());

    var chromosome1 = new Chromosome(1);
    chromosome1.on('error', logError);
    chromosome1.emit('addGene', gene1);

    var genome = new Genome(1);
//    genome.on('complete', function () {
//        genome.emit('outcome', function (outcome) {
//            console.log(outcome);
//        });
//    });
    genome.emit('addChromosome', chromosome1);
    return genome;
}

var population = [];
var originalStamp = (new Date()).getTime();
var stamp = originalStamp;
for (var i = 0; i < 1000000; i++) {
    population.push(createOrgainism());
    if (i % 1000 === 0) {
        var created = (new Date()).getTime();
        console.log((created - originalStamp) + " --- " + (created - stamp) + " --- " + i);
        stamp = created;
    }
}

console.log(population.length);

function logError(error) {
    console.error(error);
}
