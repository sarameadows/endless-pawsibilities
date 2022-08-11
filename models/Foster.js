const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

// need to include:
// - way to remove any dashes or parentheses from a phone number before it reaches the db

class Foster extends Model {};

Foster.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING(30),
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
        },
        is_staff: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            default: 0
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'foster'
    }
);

module.exports = Foster;