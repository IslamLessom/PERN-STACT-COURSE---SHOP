require('dotenv').config()

const express = require('express')
const sequelize = require('./db')

const app = express()

const port = process.env.PORT || 5000

const start = async () => {
    try {
        await sequelize.authenticate();// подключение к базе
        await sequelize.sync()          //сверяет состояние базы данных
        app.listen(port, () => console.log(`server start port ${port}`))
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

start()
