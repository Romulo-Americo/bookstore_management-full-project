const express = require('express');
const router = express.Router();


const createEmployee = require('../../controllers/employee/employeeControll/createEmployee');
const updateEmployee = require('../../controllers/employee/employeeControll/updateEmployee');
const deleteEmployee = require('../../controllers/employee/employeeControll/deleteEmployee');
const listEmployee = require('../../controllers/employee/employeeControll/listEmployee');
const findEmployee = require('../../controllers/employee/employeeControll/findEmployee');

//Importação das rotas de validação
const validationLogin = require('../../controllers/employee/employeeControll/validationLogin');
const unblockEmployee = require('../../controllers/employee/employeeControll/unblockEmployee');

router.post('/newEmployee', createEmployee);
router.put('/updateEmployee/:id', updateEmployee);
router.delete('/deleteEmployee/:id', deleteEmployee);
router.get('/listEmployees', listEmployee);
router.get('/findEmployee/:id', findEmployee);

//Rotas de validação de login
router.post('/login', validationLogin);
router.post('/unblock/:id', unblockEmployee)

module.exports = router