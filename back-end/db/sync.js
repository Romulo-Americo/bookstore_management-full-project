const dbConnection  = require('./connection');
const Book = require('../models/books/book');
const Client = require('../models/client/client');
const Employee = require('../models/employee/employee');
const TypeEmployee = require('../models/employee/typeEmployee');
const EmployeeAttemps = require('../models/employee/employeeAttemps');
const Rental = require('../models/rental/rental');

dbConnection.sync()
.then(() =>{
    console.log('Tables created succesfuly');
})
.catch((err) =>{
    console.error(`Error in create tables ${err}`);
});

