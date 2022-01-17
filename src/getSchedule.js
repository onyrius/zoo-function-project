const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const days = Object.keys(hours);
const openCloseOffice = Object.values(hours).map((eachDay) => {
  const morning = eachDay.open;
  const night = eachDay.close;
  return `Open from ${morning}am until ${night}pm`;
});

const getExhibition = (day) => {
  const speciesOn = species.filter((specie) => specie.availability.includes(day));
  const returnSpecieOn = speciesOn.map((specieOn) => specieOn.name);
  return returnSpecieOn;
};

const verifyMonday = (day) => {
  if (day === 'Monday') {
    return { Monday: { exhibition: 'The zoo will be closed!', officeHour: 'CLOSED' } };
  }
};

const getWeekHours = (schedule = '') => {
  if (schedule === 'Monday') return verifyMonday('Monday');
  const weekHours = days.reduce((acc, day, index) => {
    if (day !== 'Monday') {
      acc[day] = {
        officeHour: `${openCloseOffice[index]}`,
        exhibition: getExhibition(day),
      };
    }
    return acc;
  }, { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } });
  return weekHours;
};

const weekDays = Object.keys(hours).map((day) => day);
const allSpecies = species.map((specie) => specie.name);

const filterDaysAndHours = (dayAndHours) => {
  const filterDays = getWeekHours();
  const result = Object.entries(filterDays).reduce((acc, dayMatch, index) => {
    if (dayMatch.includes(dayAndHours)) {
      const [day, hour] = dayMatch;
      acc[day] = hour;
      return acc;
    }
    return acc;
  }, {});
  return result;
};

const filterSpecies = (specieSearched) => {
  const filterSpecie = species.filter((specie) => specie.name === specieSearched);
  return filterSpecie.map((availability) => availability.availability)[0];
};

function getSchedule(scheduleTarget = {}) {
  if (scheduleTarget === 'Monday') return getWeekHours(scheduleTarget);
  if (weekDays.includes(scheduleTarget)) return filterDaysAndHours(scheduleTarget);
  if (allSpecies.includes(scheduleTarget)) return filterSpecies(scheduleTarget);
  return getWeekHours();
}

module.exports = getSchedule;
