const Client = require('../../models/client/client');

module.exports = (req, res) =>{

    Client.destroy({ where: {client_id : req.params.id} })
    .then(() =>{
        res.send('Client deleted succesfuly');
    })
    .catch((err) =>{
        res.send(`Error in delete client ${err}`);
    })
}