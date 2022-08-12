const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

// need to include:
// way to remove any dashes or parentheses from a phone number before it reaches the db
// that ^ probably goes in frontend js or the controllers

class Employee extends Model {};

Employee.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
            // meant to check that the value matches this format:
            // xxx-xxx-xxxx
            // unsure why it doesnt work
            // validate: {
            //     is: /d{3}-d{3}-d{4}/
            // }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'employee'
    }
);

module.exports = Employee;