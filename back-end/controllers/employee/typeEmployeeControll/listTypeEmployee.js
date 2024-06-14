const TypeEmployee = require('../../../models/employee/typeEmployee');


module.exports = (req, res) =>{
    TypeEmployee.findAll()
    .then((typeEmployee) =>{
        res.send(typeEmployee);
    })
    .catch((err) =>{
        res.send(`Error in listed type employees ${err}`);
    })
}