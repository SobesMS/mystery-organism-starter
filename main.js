// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// creates a new organism
function pAequorFactory(num, dnaArray) {
  return {
    _specimenNum: num, 
    _dna: dnaArray,
    mutate() {
      this._dna.push(returnRandBase());
    },
    compareDNA(pAequor) {
      let commonDnaCount = 0;
      for (let i = 0; i < this._dna.length; i++) {
        if (this._dna[i] === pAequor._dna[i]) {
          commonDnaCount++;
        }
      }
      console.log(`specimen #1 and specimen #2 have ${(commonDnaCount / this._dna.length) * 100}% DNA in common`);
    },
    willLikelySurvive() {
      let DnaCount = 0;
      this._dna.forEach(element => {
        if (element === 'C' || element === 'G') {
          DnaCount++;
        }
      });
      if ((DnaCount / this._dna.length) * 100 >= 60) {
        return true;
      } else {
        return false;
      }
    }
  }
}

// generates an array of 30 organisms that meet the 'likely survive' requirement of 60% or more C or G DNA strands
const randomOrganisms = [];

while (randomOrganisms.length < 30) {
  let organism = pAequorFactory(randomOrganisms.length + 1, mockUpStrand());
  if (organism.willLikelySurvive) {
    randomOrganisms.push(organism);
  }
}

// prints the results of the randomly generated array of organisms
randomOrganisms.forEach(organism => console.log(organism));