const Employee = require('../../../models/employee/employee');

const createRegistration = require('../../../utils/createRegistration');
const nameValidation = require('../../../utils/nameValidation');
const bcrypt = require('bcrypt');
require('dotenv').config

module.exports = (req, res) => {
    const { name, email, typeEmployeeId } = req.body;
    const registration = createRegistration();
    const password = process.env.DEFAULT_PASSWORD; 

    const validationMessage = nameValidation(name);
    if (validationMessage !== 'Name validated') {
        return res.send(validationMessage);
    }

    // Hasheando a senha
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            return res.send({message:`Error hashing password: ${err}`});
        }
        Employee.create({
            name,
            registration,
            email,
            password: hashedPassword,
            typeEmployeeId
        })
        .then(() => {
            res.send({message: 'Employee created successfully'});
        })
        .catch((err) => {
            res.send({message:`Error in creating Employee: ${err}`});
        });
    });
};
