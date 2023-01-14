const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true }, //unique: true следит за тем что бы майл был не повторяюшимся
    password: {type: DataTypes.STRING}
})
 

