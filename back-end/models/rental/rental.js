const { DataTypes } = require('sequelize');
const data = require('../../db/connection');

//chamda de livro e de cliente para registro de identficação do aluguel
const Client = require('../client/client')
const Book = require('../books/book');

const Rental = data.define(
    'Rental',{
        id_rental:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull:false
        },
        rental_date:{
            type: DataTypes.DATE,
            allowNull:false
        },
        return_date:{
            type:DataTypes.DATE,
            allowNull: false
        },
        situation:{
            type: DataTypes.BOOLEAN,
            allowNull:false
        }
    }
)

Rental.belongsTo(Client, { foreignKey: 'clientId', as: 'client' });
Client.hasMany(Rental, {foreignKey: 'clientId'});

Rental.belongsTo(Book, { foreignKey: 'bookId', as:'book' });
Book.hasMany(Rental, { foreignKey: 'bookId' });

module.exports = Rental;