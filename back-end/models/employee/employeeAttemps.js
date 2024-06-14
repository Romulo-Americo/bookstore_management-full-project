const { DataTypes } = require('sequelize');
const data = require('../../db/connection');

//Chamada do funcionário para criar a relação para verificação de tentativas
const Employee = require('./employee');

const EmployeeAttemps = data.define(
    'EmployeeAttemps',{
        id_attemps:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
        employee_id:{
            type: DataTypes.INTEGER,
            allowNull:false
        },
        attemps:{
            type: DataTypes.INTEGER,
            allowNull:false,
            defaultValue: 0
        }
    }
)


module.exports = EmployeeAttemps;
