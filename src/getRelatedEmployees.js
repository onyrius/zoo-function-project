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

module.exports = { isManager, getRelatedEmployees };
