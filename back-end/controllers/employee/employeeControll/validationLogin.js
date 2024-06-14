const Employee = require('../../../models/employee/employee');
const EmployeeAttemps = require('../../../models/employee/employeeAttemps');
const { Sequelize } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (req, res) => {
    const { registration } = req.body;
    const { password } = req.body

    Employee.findOne({ where: { registration: registration } })
        .then(employee => {
            if (!employee) {
                return res.send({ message:'Usuário não existe' });
            }

            bcrypt.compare(password, employee.password, (err, isMatch) => {
                if (err) {
                    return console.log(`Error comparing passwords: ${err}`);
                }

                if (!isMatch) {
                    EmployeeAttemps.findOne({ where: { employee_id: employee.employee_id } })
                        .then(attempt => {
                            if (!attempt) {
                                return EmployeeAttemps.create({ employee_id: employee.employee_id, attempts: 1 })
                                    .then(() => {
                                        console.log('Tentativa gravada')
                                    });
                            } else {
                                EmployeeAttemps.update(
                                    { attemps: Sequelize.literal('attemps + 1') },
                                    { where: { employee_id: employee.employee_id } }
                                )
                                    .then(() => {
                                        return EmployeeAttemps.findOne({ where: { employee_id: employee.employee_id } });
                                    })
                                    .then(updatedAttempt => {
                                        if (updatedAttempt.attemps >= 2) {
                                            return Employee.update(
                                                { situation: false },
                                                { where: { employee_id: updatedAttempt.employee_id } }
                                                );
                                        } 
                                        return res.send({ message: 'Senha incorreta' });
                                        
                                    });
                            }
                        })
                }

                return res.send({ message: 'Bem vindo'});
            
            });
        })
        .catch(err => {
            res.send(`Error finding employee: ${err}`);
        });
};
