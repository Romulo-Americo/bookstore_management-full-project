const Employee = require('../../../models/employee/employee');

const bcrypt = require('bcrypt');

module.exports = (req, res) =>{
    const { id } = req.params
    

    Employee.update(req.body, {
        where: { employee_id : id }
    })
    .then(() =>{
        res.send('Employee updated successfuly');
    })
    .catch((err) =>{
        res.send('Erro to update employee');
    })
}