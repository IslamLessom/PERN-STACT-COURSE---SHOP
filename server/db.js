const { Sequelize } = require("sequelize")

module.export = new Sequelize(
    process.env.DB_NAME, //NAME BD
    process.env.DB_USER, //USER BD
    process.env.DB_PASSWORD, //PASSWORD BD
    {
        dialect: "postgres",
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)

