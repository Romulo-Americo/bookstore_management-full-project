const Book = require("../../../models/books/book");

module.exports = (req, res) =>{
    const { id } = req.params

    Book.update( req.body,{
        where: {book_id: id}
    })
    .then(() =>{
        res.send('Book updated');
    })
    .catch((err) =>{
        res.send(`Erro in update book ${err}`);
    })
}