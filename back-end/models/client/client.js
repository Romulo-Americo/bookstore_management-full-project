const { DataTypes } = require('sequelize');
const data = require('../../db/connection');


const Client = data.define(
    'Client',{
        client_id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        registration:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false
        },
        address:{
            type: DataTypes.STRING,
            allowNull: false
        },
        contact:{
            type: DataTypes.STRING,
            allowNull: false
        },
        points:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        situation:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        qtBooks:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        }

    }
)



module.exports = Client;