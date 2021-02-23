const Sequelize = require('sequelize');



const database = new Sequelize({
    "username": "root",
    "password": "root",
    "database": "todolist_development",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "port": "8889"
})

module.exports = database;