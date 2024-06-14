const Book = require("../../../models/books/book");

module.exports = (req, res) =>{
    Book.findAll()
    .then((book) =>{
        if(book){
            res.send(book)
        }else{
            res.send('Your book list is empty :(')
        }
    })
    .catch((err) =>{
        res.send(`Erro in listed books ${err}`);
    })
}