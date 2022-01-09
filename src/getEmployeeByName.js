const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  const { employees } = data;
  const nomeEmployee = {};
  const findNome = (nome) => nome.firstName === employeeName || nome.lastName === employeeName;
  const names = employees.find(findNome);
  return Object.assign(nomeEmployee, names);
}

module.exports = getEmployeeByName;
