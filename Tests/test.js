
var Nucleotide = require('../Classes/DNA/Nucleotide');
var BasePair = require('../Classes/DNA/BasePair');
var Gene = require('../Classes/DNA/Gene');
var Chromosome = require('../Classes/DNA/Chromosome');
var Genome = require('../Classes/DNA/Genome');

var A = new Nucleotide("A");
var T = new Nucleotide("T");
var C = new Nucleotide("C");
var G = new Nucleotide("G");

var basePair1 = new BasePair(A, T);
var basePair2 = new BasePair(A, C);
var basePair3 = new BasePair(G, C);
var basePair4 = new BasePair(C, T);
var basePair5 = new BasePair(T, A);
var basePair6 = new BasePair(C, A);
var basePair7 = new BasePair(C, G);
var basePair8 = new BasePair(T, C);

var gene1 = new Gene(2);
gene1.on('error', logError);
gene1.emit('addBasePair', basePair1);
gene1.emit('addBasePair', basePair2);
var gene2 = new Gene(2);
gene2.on('error', logError);
gene2.emit('addBasePair', basePair3);
gene2.emit('addBasePair', basePair4);

var gene3 = new Gene(2);
gene3.on('error', logError);
gene3.emit('addBasePair', basePair5);
gene3.emit('addBasePair', basePair6);
var gene4 = new Gene(2);
gene4.on('error', logError);
gene4.emit('addBasePair', basePair7);
gene4.emit('addBasePair', basePair8);

var chromosome1 = new Chromosome(2);
chromosome1.on('error', logError);
chromosome1.emit('addGene', gene1);
chromosome1.emit('addGene', gene2);
var chromosome2 = new Chromosome(2);
chromosome2.on('error', logError);
chromosome2.emit('addGene', gene3);
chromosome2.emit('addGene', gene4);

var genome = new Genome(2);
genome.on('complete', function () {
    console.log(genome);
});
genome.emit('addChromosome', chromosome1);
genome.emit('addChromosome', chromosome2);

function logError(error) {
    console.error(error);
}
