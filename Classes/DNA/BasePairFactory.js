
var Nucelotide = require('./Nucleotide');
var BasePair = require('./BasePair');

var BasePairTypes = {
    A: 1,
    T: 2,
    C: 3,
    G: 4
};

var BasePairs = [
    new BasePair(new Nucelotide(BasePairTypes.A), new Nucelotide(BasePairTypes.T)), //2
    new BasePair(new Nucelotide(BasePairTypes.A), new Nucelotide(BasePairTypes.C)), //3
    new BasePair(new Nucelotide(BasePairTypes.A), new Nucelotide(BasePairTypes.G)), //4
    new BasePair(new Nucelotide(BasePairTypes.T), new Nucelotide(BasePairTypes.C)), //6
    new BasePair(new Nucelotide(BasePairTypes.T), new Nucelotide(BasePairTypes.G)), //8
    new BasePair(new Nucelotide(BasePairTypes.C), new Nucelotide(BasePairTypes.G))  //12
];

exports.GetBasePair = function () {
    return BasePairs[Math.floor(1 + (Math.random() * BasePairs.length)) - 1];
};
exports.BasePairOutcomes = [
    2, 3, 4, 6, 8, 12
];
exports.BasePairTypes = BasePairTypes;
exports.BasePairs = BasePairs;
