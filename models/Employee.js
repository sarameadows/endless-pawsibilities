const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

// need to include:
// - way to remove any dashes or parentheses from a phone number before it reaches the db

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
            type: DataTypes.INTEGER,
            allowNull: true,
            unique: true,
            validate: {
                // requires int to be 10 digits long
                len: [10, 10]
            }
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