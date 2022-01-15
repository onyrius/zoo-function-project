const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const animalMap = species.reduce((animalLocation, nameAndLocation) => {
  const { location, name } = nameAndLocation;
  if (location === 'NE') animalLocation.NE.push(name);
  if (location === 'NW') animalLocation.NW.push(name);
  if (location === 'SE') animalLocation.SE.push(name);
  if (location === 'SW') animalLocation.SW.push(name);
  return animalLocation;
}, { NE: [], NW: [], SE: [], SW: [] });
// console.log(animalMap);
//-------------------------------------------------------------------------------

const findLocationSpecie = () => species.reduce((objectLocation, specie) => {
  const { name, residents } = specie;
  const objectSpecieNameRedidents = {};
  objectSpecieNameRedidents[name] = residents.map((resident) => resident.name);
  //  console.log('objeto dentro do filter nameSpeciesLocation', objectSpecieNameRedidents);
  if (specie.location === 'NE') objectLocation.NE.push(objectSpecieNameRedidents);
  if (specie.location === 'NW') objectLocation.NW.push(objectSpecieNameRedidents);
  if (specie.location === 'SE') objectLocation.SE.push(objectSpecieNameRedidents);
  if (specie.location === 'SW') objectLocation.SW.push(objectSpecieNameRedidents);
  return objectLocation;
}, { NE: [], NW: [], SE: [], SW: [] });

const sortingSpecie = () => species.reduce((objectLocation, specie) => {
  const { name, residents } = specie;
  const objectSpecieSortedNameRedidents = {};
  const residentNames = residents.map((resident) => resident.name);
  const residentSortedNames = residentNames.sort();
  console.log(residentSortedNames);
  objectSpecieSortedNameRedidents[name] = residentSortedNames;
  console.log('objeto usando sort', objectSpecieSortedNameRedidents);
  if (specie.location === 'NE') objectLocation.NE.push(objectSpecieSortedNameRedidents);
  if (specie.location === 'NW') objectLocation.NW.push(objectSpecieSortedNameRedidents);
  if (specie.location === 'SE') objectLocation.SE.push(objectSpecieSortedNameRedidents);
  if (specie.location === 'SW') objectLocation.SW.push(objectSpecieSortedNameRedidents);
  return objectLocation;
}, { NE: [], NW: [], SE: [], SW: [] });

function getAnimalMap(options) {
  if (!options || options.sex === 'female') return animalMap;
  if (options.sorted === true && options.includeNames === true) return sortingSpecie();
  if (options.includeNames === true) return findLocationSpecie();
}

console.log('getAnimal includes true e sorted', getAnimalMap({ includeNames: true, sorted: true }));
console.log('---------------------------------------------');
// console.log('getAnimal sex', getAnimalMap({ includeNames: true, sex: 'female' }));
// console.log('getAnimal', getAnimalMap({ includeNames: true, sex: 'female', sorted: true }));
module.exports = getAnimalMap;
/** Soure : https://github.com/tryber/sd-018-b-project-zoo-functions/pull/31/files */
