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
            allowNull: false,
            // setting out some basic categories, can edit this later
            validate: {
                isIn: [['dog', 'cat', 'rabbit', 'small pet']]
            }
        },
        // years
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        // pounds
        weight: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        // good_with: {
        //     type: DataTypes.STRING(4),
        //     allowNull: true,
        //     validate: {
        //         isIn: [['kids', 'cats', 'dogs', '']]
        //     }
        // },
        // animal needs special healthcare or has behavioral issues
        special_needs: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            default: 0
        },
        foster_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'foster',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'animal'
    }
);

module.exports = Animal;