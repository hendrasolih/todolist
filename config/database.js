const Sequelize = require("sequelize");

const database = new Sequelize({
  username: "root",
  password: "",
  database: "todolist_development",
  host: "127.0.0.1",
  dialect: "mysql",
  port: "3306",
});

module.exports = database;
