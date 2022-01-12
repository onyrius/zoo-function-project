const data = require('../data/zoo_data');
// { "child": 3, "adult": 2, "senior": 1 }

/** const animalsList = () => species.reduce((animalList, specie) => {
  const { name, residents } = specie;
  const animalList2 = animalList;
  // {...animalList, [name]: residents.lenght} (usando o spread)
  animalList2[name] = residents.length;
  return animalList2;
}, {}); */
function countEntrants(entrants) {
  const objEntrants = {};
  const filterPersonsChild = entrants.filter((persons) => persons.age < 18);
  const filterPersonsAdult = entrants.filter((persons) => persons.age >= 18 && persons.age < 50);
  const filterPersonsSenior = entrants.filter((persons) => persons.age >= 50);
  objEntrants.child = filterPersonsChild.length;
  objEntrants.adult = filterPersonsAdult.length;
  objEntrants.senior = filterPersonsSenior.length;
  return objEntrants;
}

function calculateEntry(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) return 0;
  const numbersEntrants = countEntrants(entrants);
  const { child, adult, senior } = numbersEntrants;
  const adultPrize = 49.99;
  const chilPrize = 20.99;
  const seniorPrize = 24.99;
  const calc = (child * chilPrize) + (adult * adultPrize) + (senior * seniorPrize);
  return calc;
}
/* const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
]; */

/* console.log('countEntrants', countEntrants(entrants));
console.log('calculateEntry', calculateEntry(entrants));
console.log('calculateEntry', calculateEntry());
console.log('calculateEntry', calculateEntry({})); */

module.exports = { calculateEntry, countEntrants };
