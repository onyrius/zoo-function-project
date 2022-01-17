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
  objectSpecieSortedNameRedidents[name] = residentSortedNames;
  if (specie.location === 'NE') objectLocation.NE.push(objectSpecieSortedNameRedidents);
  if (specie.location === 'NW') objectLocation.NW.push(objectSpecieSortedNameRedidents);
  if (specie.location === 'SE') objectLocation.SE.push(objectSpecieSortedNameRedidents);
  if (specie.location === 'SW') objectLocation.SW.push(objectSpecieSortedNameRedidents);
  return objectLocation;
}, { NE: [], NW: [], SE: [], SW: [] });

const searchSexSpecies = (sexAnimal, sorted) => {
  const localNameMale = species.reduce((localMales, animal) => {
    const { location, residents } = animal;
    let sex = residents;
    if (sexAnimal) sex = residents.filter((resident) => resident.sex === sexAnimal);
    const objSpecieName = {};
    const animalsName = sex.map((resident) => resident.name);
    if (sorted) animalsName.sort();
    objSpecieName[animal.name] = animalsName;
    localMales[location].push(objSpecieName);
    return localMales;
  }, { NE: [], NW: [], SE: [], SW: [] });
  return localNameMale;
};

function getAnimalMap(options = {}) {
  if (!options.includeNames) return animalMap;
  if (options.sex || options.sorted) return searchSexSpecies(options.sex, options.sorted);
  if (options.sorted) return sortingSpecie();
  return findLocationSpecie();
}
module.exports = getAnimalMap;

/** Source :
 * com ajuda do Tonn, do repositorio do thiago nobrega e do Thalles.
 * https://github.com/tryber/sd-018-b-project-zoo-functions/pull/31/files */
