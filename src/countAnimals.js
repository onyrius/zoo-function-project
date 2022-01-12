const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const animalsList = () => species.reduce((animalList, specie) => {
  const { name, residents } = specie;
  const animalList2 = animalList;
  // {...animalList, [name]: residents.lenght} (usando o spread)
  animalList2[name] = residents.length;
  return animalList2;
}, {});

function countAnimals(animal) {
  if (!animal) return animalsList();
  const { specie, sex } = animal;
  const findSpecie = species.find((specieInZoo) => specieInZoo.name === specie);
  const findFilterSex = findSpecie.residents.filter((sexSpecie) => sexSpecie.sex === sex);
  console.log('findSpecie', findFilterSex);
  if (sex) return findFilterSex.length;
  return findSpecie.residents.length;
}
// console.log(countAnimals({ specie: 'penguins' })); // 4
// console.log(countAnimals({ specie: 'bears', sex: 'female' })); // 0
console.log('elephants', countAnimals({ specie: 'elephants', sex: 'male' })); // 2
module.exports = countAnimals;
