const express = require('express');
const router = express.Router();

const createTypeEmployee = require('../../controllers/employee/typeEmployeeControll/createTypeEmployee');
const listTypeEmployee = require('../../controllers/employee/typeEmployeeControll/listTypeEmployee');

router.post('/newTypeEmployee', createTypeEmployee);
router.get('/listTypeEmployee', listTypeEmployee);


module.exports = router; 