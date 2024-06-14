const { DataTypes } = require('sequelize');
const data = require('../../db/connection');

const typeEmployee = data.define(
    'TypeEmployee',{
        typeEmployee_id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        typeEmployee:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        timestamps: false
    }
)

module.exports = typeEmployee