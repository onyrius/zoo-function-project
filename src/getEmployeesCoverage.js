const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getSpeciesNome = (identifyEmployees) => {
  const findSpecies = identifyEmployees.responsibleFor;
  const nameSpecie = species.reduce((acc, eachSpecie) => {
    const { name } = eachSpecie;
    if (findSpecies.includes(eachSpecie.id)) {
      acc.push(name);
      return acc;
    }
    return acc;
  }, []);
  return nameSpecie;
};

const getSpeciesLocation = (identifyEmployees) => {
  const findSpecies = identifyEmployees.responsibleFor;
  const locationSpecie = species.reduce((acc, eachSpecie) => {
    const { location } = eachSpecie;
    if (findSpecies.includes(eachSpecie.id)) {
      acc.push(location);
      return acc;
    }
    return acc;
  }, []);
  return locationSpecie;
};

const getEmployeeById = (identify) => {
  const { id } = identify;
  const objectEmployee = { };
  const getEmployee = employees.find((employee) => employee.id === id);
  if (getEmployee === undefined) {
    throw new Error('Informações inválidas');
  } else if (getEmployee) {
    objectEmployee.id = getEmployee.id;
    objectEmployee.fullName = `${getEmployee.firstName} ${getEmployee.lastName}`;
    objectEmployee.species = getSpeciesNome(getEmployee);
    objectEmployee.locations = getSpeciesLocation(getEmployee);
    return objectEmployee;
  }
  return objectEmployee;
};

const getEmployeeByName = (identify) => {
  const { name } = identify;
  const objectEmployee = { };
  const employee = employees.find((sheHe) => sheHe.firstName === name || sheHe.lastName === name);
  objectEmployee.id = employee.id;
  objectEmployee.fullName = `${employee.firstName} ${employee.lastName}`;
  objectEmployee.species = getSpeciesNome(employee);
  objectEmployee.locations = getSpeciesLocation(employee);
  return objectEmployee;
};

const getAllEmployees = () => {
  const allEmployees = employees.map((employee) => ({
    fullName: `${employee.firstName} ${employee.lastName}`,
    id: employee.id,
    species: getSpeciesNome(employee),
    locations: getSpeciesLocation(employee),
  }));
  return allEmployees;
};

function getEmployeesCoverage(identify) {
  if (!identify) return getAllEmployees();
  const { name, id } = identify;
  if (id) return getEmployeeById(identify);
  if (name) return getEmployeeByName(identify);
}

module.exports = getEmployeesCoverage;
