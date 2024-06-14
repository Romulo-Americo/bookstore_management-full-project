const Book = require('../../../models/books/book');
module.exports = (req, res) => {
    const { title, author,  genre, year, price } = req.body;

    Book.create({
        title,
        author,
        genre,
        year,
        price,
    })
    .then(()=>{
        res.send('Book created successfuly')
    })
    .catch(err => {
        res.status(500).send(`Error in creating book: ${err}`);
    });
}
