const express = require('express');
const router = express.Router();

const createBook = require('../../controllers/book/bookController/createBook');
const readBook = require('../../controllers/book/bookController/readBook');
const findBook = require('../../controllers/book/bookController/findBook');
const updateBook = require('../../controllers/book/bookController/updateBook');
const deleteBook = require('../../controllers/book/bookController/deleteBook');

router.post('/newBook', createBook);
router.get('/listBooks', readBook);
router.get('/findBook/:id', findBook);
router.put('/updateBook/:id', updateBook)
router.delete('/deleteBook/:id', deleteBook);

module.exports = router;

