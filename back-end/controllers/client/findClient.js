const Client = require('../../models/client/client');

module.exports = (req, res) =>{
    

    Client.findByPk(req.params.id)
    .then((client) =>{
        if(client){
            res.send(client);
        }else{
            res.send("Client doesn't exist");
        }
    })
    .catch((err) =>{
        res.send(`Error to find client ${err}`);
    })

}