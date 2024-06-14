const TypeEmployee = require('../../../models/employee/typeEmployee');


module.exports = (req, res) =>{
    TypeEmployee.create(req.body)
    .then(() =>{
        res.send({ message: 'Type employee created succesfuly' });
    })
    .catch((err) =>{
        res.send({ message: `Erro to create ${err}` })
    })
}