const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Animal extends Model {};

Animal.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            default: 'No Name'
        },
        species: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        // animal needs special healthcare or has behavioral issues
        special_needs: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            default: 0
        },
        with_foster: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            default: 0
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: false,
        underscored: true,
        modelName: 'animal'
    }
);

module.exports = Animal;