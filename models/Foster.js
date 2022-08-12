const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

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
            type: DataTypes.STRING,
            allowNull: true,
            unique: true
            // meant to check that the value matches this format:
            // xxx-xxx-xxxx
            // unsure why it doesnt work
            // validate: {
            //     is: /d{3}-d{3}-d{4}/
            // }
        },
        // no foreign key connection because both tables require emails to be unique
        is_employee: {
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