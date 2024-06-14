const express = require('express');
const router = express.Router();

const createClient = require('../../controllers/client/createClient');
const deleteClient = require('../../controllers/client/deleteClient');
const findClient = require('../../controllers/client/findClient');
const readClient = require('../../controllers/client/readClient');
const updateClient = require('../../controllers/client/updateClient');
const rentalBooks = require('../../controllers/client/rentalBooks');


router.post('/createClient', createClient);
router.delete('/deleteClient/:id', deleteClient);
router.get('/findClient/:id', findClient);
router.get('/readClient', readClient);
router.put('/updateClient/:id', updateClient);

//rotas de validação 
router.put('/rentalBooks', rentalBooks);

module.exports = router