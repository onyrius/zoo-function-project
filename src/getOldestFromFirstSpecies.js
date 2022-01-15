const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const animalDatas = [];
  const searchEmployee = employees.filter((emplooyee) => id === emplooyee.id);
  const findResponsible = searchEmployee.find((responsibleFor) => responsibleFor.responsibleFor);
  console.log('linha 8', findResponsible);
  const findAnimals = species.find((specie) => findResponsible.responsibleFor.includes(specie.id));
  console.log('animal', findAnimals);
  const oldestAnimal = findAnimals.residents.map((animal) => {
    if (Math.max(animal.age)) return animal;
  });
  console.log('oldest', oldestAnimal);
}

console.log('resultado da funçao', getOldestFromFirstSpecies('56d43ba3-a5a7-40f6-8dd7-cbb05082383f'));
module.exports = getOldestFromFirstSpecies;
