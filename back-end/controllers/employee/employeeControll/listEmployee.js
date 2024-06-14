const Employee = require('../../../models/employee/employee');

module.exports = (req, res) =>{
    Employee.findAll()
    .then((employe) =>{
        res.send(employe);
    })
    .catch((err) =>{
        res.send(`Error in listed employees`);
    })
}