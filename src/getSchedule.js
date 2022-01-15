const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const fillDays = () => {
  const daysAndHours = data.hours;
  console.log('linha 6', daysAndHours);
  const addKeys = () => Object.keys(daysAndHours).reduce((acc, key, index) => {
    const hoursArray = Object.values(daysAndHours);
    console.log('hoursArray linha 9', hoursArray);
    const officeTime = 'Open from  until';
    acc[[key]] = new Object();
    
    return acc;
  }, {});
  console.log('addkeys', addKeys());
  return addKeys();
};

console.log('fillDay', fillDays());

function getSchedule(scheduleTarget) {
  // seu código aqui
}

module.exports = getSchedule;
