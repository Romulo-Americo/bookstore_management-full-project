const Client = require('../../models/client/client');

const createRegistration = require('../../utils/createRegistration');
const nameValidation = require('../../utils/nameValidation');

module.exports = (req, res) =>{
    const { name, email, address, contact } = req.body;
    const registration = createRegistration()

    const validationMessage = nameValidation(name);
    if (validationMessage !== 'Name validated') {
        return res.send(validationMessage);
    }

    Client.create({
        name,
        registration,
        email,
        address,
        contact,
    })
    .then(() =>{
        res.send('Client created successfuly');
    })
    .catch((err) =>{
        res.send(`Error in create client ${err}`)
    })
}