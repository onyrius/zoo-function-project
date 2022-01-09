const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const especie = species.find((specie) => specie.name === animal);
  return especie.residents.some((resident) => resident.age > age && especie.name === animal);
}
getAnimalsOlderThan('otters', 7); // true
getAnimalsOlderThan('penguins', 12); // false

module.exports = getAnimalsOlderThan;
