const Employee = require('../../../models/employee/employee');

module.exports = (req, res) =>{
    Employee.findByPk(req.params.id)
    .then((employee) =>{
        if(employee){
            res.send(employee)
        }else{
            res.send("Employ not found or doesn't exist");
        }
    })
    .catch((err) =>{
        res.send(`Error to find employee ${err}`);
    })
}