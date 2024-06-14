const Employee = require('../../../models/employee/employee');

module.exports = (req, res) =>{
    Employee.destroy({ where: { employee_id: req.params.id }  })
    .then(() =>{
        res.send('Employee deleted succesfuly');
    })
    .catch((err) =>{
        res.send(`Error to delete employee ${err}`);
    })
}