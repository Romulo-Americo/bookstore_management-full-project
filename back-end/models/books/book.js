const { DataTypes } = require('sequelize');
const data = require('../../db/connection');


const Book = data.define(
    'Book',{
        book_id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        author:{
            type:DataTypes.STRING,
            allowNull: false
        },
        genre:{
            type:DataTypes.STRING,
            allowNull:false
        },
        year:{
            type: DataTypes.STRING,
            allowNull:false
        },
        price:{
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        quantity:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 20
        },
        rating:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        }
});

  
module.exports = Book;