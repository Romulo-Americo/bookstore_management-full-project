const Client = require('../../models/client/client');

module.exports = (req, res) =>{
    const { id } = req.params

    Client.update(req.body, {
        where: {client_id: id}
    })
    .then(() =>{
        res.send('Client update succesfully');
    })
    .catch((err) =>{
        res.send(`Error in update client ${err}`);
    })
}