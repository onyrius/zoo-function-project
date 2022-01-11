const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const isManager = (id) => employees.some(({ managers }) => managers.includes(id));

const verifyIsManager = (id) => {
  if (!isManager(id)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
};
function getRelatedEmployees(managerId) {
  try {
    verifyIsManager(managerId);
    return employees.reduce((listaRelatedEmployees, employee) => {
      const fullName = `${employee.firstName} ${employee.lastName}`;
      if ((isManager(managerId) === employee.managers.includes(managerId))) {
        listaRelatedEmployees.push(fullName);
      }
      return listaRelatedEmployees;
    }, []);
  } catch (error) {
    throw error.message;
  }
}

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992')); // [ 'Burl Bethea', 'Ola Orloff', 'Emery Elser' ]
module.exports = { isManager, getRelatedEmployees };

/** source https://github.com/tryber/sd-018-b-project-zoo-functions/pull/99/files */
