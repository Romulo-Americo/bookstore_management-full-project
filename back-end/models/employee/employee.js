const { DataTypes } = require('sequelize');
const data = require('../../db/connection');

//Requisição da chave estrangeira do tipo de funcionário
const TypeEmployee = require('./typeEmployee');

const Employee = data.define(
    'Employee', {
        employee_id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        registration:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        },
        situation:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }

    }
)

Employee.belongsTo(TypeEmployee, { foreignKey: 'typeEmployeeId', as: 'typeEmployee' });
TypeEmployee.hasMany(Employee, { foreignKey: 'typeEmployeeId' })

module.exports = Employee
