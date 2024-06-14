const Book = require('../../../models/books/book');

module.exports = (req, res) =>{
    Book.destroy({ where: { book_id: req.params.id } })
    .then(() =>{
        res.send('Book deleted successfuly');
    })
    .catch((err) =>{
        res.send(`Error in delete book ${err}`);
    })
}