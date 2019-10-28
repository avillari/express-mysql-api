const connection = require('../db');

const findEmployeeById = (id, callback) => {
    connection.query('SELECT * FROM employees WHERE id=?', id, (error, employee) => {
        if(error) {
            callback(null, "Unable to find employee by ID");
        }
        else if(employee.length === 0){
            callback(null, "Unable to find employee by ID");
        } else {
           callback(employee, null);
        }
    })
}

const addEmployee = (employee, callback) => {
    connection.query('INSERT INTO employees SET ?', employee, (err, result) => {
        if(err){
            callback(null, "Unable to add new employee")
        }
         else if(employee.name === undefined || employee.location === undefined){
            callback(null, "Employee payload invalid. Please check all fields are valid")
        } else {
            callback(result, null);
        }
    })
}

const getAllEmployees = (callback) => {
    connection.query('SELECT * FROM employees', (error, employees) => {
        if(error){
            callback(`Failed to retrieve employees: ${err}`)
        } else {
            callback(null, employees);
        }   
    })
}

module.exports = { findEmployeeById, addEmployee, getAllEmployees }