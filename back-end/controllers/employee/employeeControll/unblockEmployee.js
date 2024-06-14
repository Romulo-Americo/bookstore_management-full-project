const Employee = require('../../../models/employee/employee');
const EmployeeAttemps = require('../../../models/employee/employeeAttemps');
const bcrypt = require('bcrypt');
require('dotenv').config

module.exports = (req, res) =>{
    const { id } = req.params;
    const password = process.env.DEFAULT_PASSWORD; 

    Employee.findOne({ where: { employee_id: id } })
    .then((employee) =>{
        if(employee.situation){
           return res.send({ message:'This user is not blocked' });
        }else{
            bcrypt.hash(password, 10, (err, hashedPassword) =>{
                if (err) {
                    return res.status(500).send(`Error hashing password: ${err}`);
                }
                employee.update({ 
                    situation: true,
                    password: hashedPassword
                });
                EmployeeAttemps.findOne( { where: { employee_id: id }} )
                .then((resetAttemps) =>{
                    resetAttemps.update({
                        attemps: 0
                    })
                })
                return res.send({ message:'User unblocked' });
            })
        }
    })
    .catch((err) =>{
        res.send(`Error in unblock employee ${err}`);
    })
}