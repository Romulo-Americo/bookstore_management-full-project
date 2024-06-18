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
        res.send({ message:'Book created successfuly' })
    })
    .catch(err => {
        res.send({ message:`Error in creating book: ${err}` });
    });
}
