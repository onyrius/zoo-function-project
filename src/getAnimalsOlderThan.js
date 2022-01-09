const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // encontra a especie do argumento:
  const especie = species.find((specie) => specie.name === animal);
  // verifica se todos animais da mesma especie atende a condiçao:
  return especie.residents.every((resident) => resident.age > age && especie.name === animal);
}

module.exports = getAnimalsOlderThan;
