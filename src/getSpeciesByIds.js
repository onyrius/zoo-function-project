const { species } = require('../data/zoo_data');

const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const animais = [];
  species.filter((animalObjeto) => ids.map((id) => {
    if (animalObjeto.id === id) {
      animais.push(animalObjeto);
    }
    return animais;
  }));
  return animais;
}

module.exports = getSpeciesByIds;
