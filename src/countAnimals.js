const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const animalsList = () => species.reduce((animalList, specie) => {
  const { name, residents } = specie;
  const animalList2 = animalList;
  animalList2[name] = residents.length;
  return animalList2;
}, {});

function countAnimals(animal) {
  if (!animal) return animalsList();
  const { specie, sex } = animal;
  const findSpecie = species.find((specieInZoo) => specieInZoo.name === specie);
  const findFilterSex = findSpecie.residents.filter((sexSpecie) => sexSpecie.sex === sex);
  if (sex) return findFilterSex.length;
  return findSpecie.residents.length;
}

module.exports = countAnimals;
