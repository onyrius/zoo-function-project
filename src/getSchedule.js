const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const days = Object.keys(hours);
const getExhibition = (day) => {
  const speciesOn = species.filter((specie) => specie.availability.includes(day));
  const returnSpecieOn = speciesOn.map((specieOn) => specieOn.name);
  return returnSpecieOn;
};

const getWeekHours = () => {
  const openCloseOffice = Object.values(hours).map((eachDay) => {
    const morning = eachDay.open;
    const night = eachDay.close;
    return `Open from ${morning}am until ${night}pm`;
  });
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

const verifyMonday = (day) => {
  if (day === 'Monday') {
    return { Monday: { exhibition: 'The zoo will be closed!', officeHour: 'CLOSED' } };
  }
};
const filterDaysAndHours = (dayAndHours) => {
  const filterDays = Object.entries(getWeekHours());
  return filterDays.find((schedule) => schedule.includes(dayAndHours));
};
console.log('filterDays', filterDaysAndHours('Wednesday'));

function getSchedule(scheduleTarget) {
  if (scheduleTarget === 'Monday') return verifyMonday(scheduleTarget);
  // return filterDaysAndHours(scheduleTarget);
  return getWeekHours();
}
console.log('RESULTADO', getSchedule('Wednesday'));

module.exports = getSchedule;
