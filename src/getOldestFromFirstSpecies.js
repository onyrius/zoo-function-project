const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const searchEmployee = employees.filter((emplooyee) => id === emplooyee.id);
  const findResponsible = searchEmployee.find((responsibleFor) => responsibleFor.responsibleFor);
  const findAnimals = species.find((specie) => findResponsible.responsibleFor.includes(specie.id));
  const oldestAnimal = findAnimals.residents.filter((animal) => animal);
  return Object.values(oldestAnimal.sort((a, b) => b.age - a.age)[0]);
  /* ultima linha com a ajuda do repositorio da Polyana: Object.values(animals.sort((a, b) => b.age - a.age)[0]); */
}

module.exports = getOldestFromFirstSpecies;

/** Source: https://github.com/tryber/sd-018-b-project-zoo-functions/pull/129/files */
