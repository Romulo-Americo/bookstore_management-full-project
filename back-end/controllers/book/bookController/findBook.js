const Book = require('../../../models/books/book');

module.exports = (req, res) =>{
    Book.findByPk(req.params.id, {
        include: [{
            model: Author,
            attributes: ['author_id']
        }]
    })
    .then((book) =>{
        if(book){
            res.send(book);
        }else{
            res.send("Book doesn't exist");
        }
    })
    .catch((err) =>{
        res.send(`Erro to find book ${err}`);
    })
}