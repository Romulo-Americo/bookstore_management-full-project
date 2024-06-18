const Client = require('../../models/client/client');

module.exports = (req, res) =>{

    Client.findAll()
    .then((clients) =>{
        res.send(clients);
    })
    .catch((err) =>{
        res.send(`Error to find clients ${err}`)
    })
}