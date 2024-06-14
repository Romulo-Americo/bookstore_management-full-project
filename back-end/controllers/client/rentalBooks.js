const Client = require('../../models/client/client');
const Book = require('../../models/books/book');


const formatData = require('../../utils/createRegistration');
const { Sequelize } = require('sequelize');


module.exports = (req, res) =>{
    const { registration, qtBooks, bookIds } = req.body;

    Client.findOne({ where: { registration: registration } })
    .then((client) =>{
        if(!client.situation){
            res.send({message: 'Usuário sem pontos para realizar o aluguel. Falta dias para realizar esta ação'});
        }else if(qtBooks > 2){
            res.send({ message: 'Limite de pedido excedido' });
        }else{
            //Bloco para colocar a data de aluguel eentrega 
            let rentalDate = new Date();
            let returnDate =  new Date(rentalDate);
            returnDate.setDate(returnDate.getDate() + 1);
            if(client.qtBooks == 2){
                res.send('Limite de livros alugados execidos') 
            }else{
                if(bookIds && bookIds.length > 0){
                    client.setBooks(bookIds)
                    .then(() =>{
                        client.update({
                            qtBooks: qtBooks,
                            rentalDate: rentalDate,
                            returnDate: returnDate
                        
                        }).then(() => {
                            bookIds.forEach((bookId) =>{
                                Book.update(
                                    { quantity: Sequelize.literal('quantity - 1') },

                                    { where: {book_id: bookId} }
                                )
                                .catch((err) =>{
                                    res.send(`Error updating book quantity ${err}`);
                                })
                            })
                            res.send('Livros alugados com sucesso');
                        }).catch((err) => {
                            res.send(`Error ${err}`);
                        });
                        
                    })
                    .catch((err) =>{
                        res.send(`Error ${err}`);
                    })
                }
            }
        }
    })
    .catch((err) =>{
        res.send(`Error in consult ${err}`)
    })

}