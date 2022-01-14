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

// console.log('animalMap', animalMap);

// obj = { location : [ {specie.name : residents[index].name}]}
const findSpecies = () => species.map((specie) => specie.name);
// console.log('usando o map', findSpecies());

const findLocation = (local) => species.find((animalLocation) => animalLocation.location === local); // mais condiçao para encontrar lugar;
// console.log('usando o find para a localizacao', findLocation('NW'));

// obj = { location : [ {specie.name : residents[index].name}]}
const encontrandoSpecies = (local) => {
  const locationAnimal = findLocation(local).location;
  console.log('linha 25, localizaçao: ', locationAnimal);
  console.log('---------------------------------------------');
  const propertySpecie = findLocation(local).name;
  console.log('linha 28,especie: ', propertySpecie);
  console.log('---------------------------------------------');
  const nameAnimals = findLocation(local).residents.map((namesInZoo) => namesInZoo.name);
  console.log('linha 31, nomes: ', nameAnimals);
  console.log('---------------------------------------------');
  const objSpecie = {};
  objSpecie[propertySpecie] = nameAnimals;
  const objLocation = {};
  objLocation[locationAnimal] = [objSpecie];
  return objLocation;
};
console.log('tentando encontrar cada especie linha 39', encontrandoSpecies('NW'));
console.log('---------------------------------------------');
// obj = { location : [ {specie.name : residents[index].name}]}

const findAnimalNames = () => {
  const namesAnimal = species.map((specie) => {
    const { residents } = specie;
    const nameOfAnimalLocation = residents.map((namesOfAnimal) => namesOfAnimal.name);
    return nameOfAnimalLocation;
  });
  return namesAnimal;
};
console.log('funcao findAnimalNames linha 51', findAnimalNames());
console.log('---------------------------------------------');
const objAnimalNameMap = findAnimalNames().reduce((acc, animalNames, index) => {
  acc[findSpecies()[index]] = animalNames;
  return acc;
}, {});
console.log('animais e seus nomes linha 57', objAnimalNameMap);
console.log('---------------------------------------------');
const objLocalAnimalNameMap = species.reduce((acc, locationAnimalNameMap, index) => {
  const { location } = locationAnimalNameMap;
  const key = Object.keys(objAnimalNameMap)[index];
  const value = Object.values(objAnimalNameMap)[index];
  const objFinal = { [location]: [{ [key]: value }] };
  console.log('objFinal', objFinal);
  return acc;
}, { });
console.log('objLocalAnimalNameMap linha 71', objLocalAnimalNameMap);
console.log('---------------------------------------------');

function getAnimalMap(options) {
  if (!options) return animalMap;
  if (options.sex === 'female' && options.sorted === true) return animalMap;

  if (options.includeNames === true) return 'chegarei aqui';
}

console.log('getAnimal sem paramentros', getAnimalMap());
// console.log('getAnimal sex', getAnimalMap({ includeNames: true, sex: 'female' }));
// console.log('getAnimal', getAnimalMap({ includeNames: true, sex: 'female', sorted: true }));
module.exports = getAnimalMap;
/** Soure : https://github.com/tryber/sd-018-b-project-zoo-functions/pull/31/files */
