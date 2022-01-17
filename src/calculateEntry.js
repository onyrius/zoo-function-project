const data = require('../data/zoo_data');

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

module.exports = { calculateEntry, countEntrants };
