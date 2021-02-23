// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class todolist extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   todolist.init({
//     toDo: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'todolist',
//   });
//   return todolist;
// };

const Sequelize = require('sequelize');
const sequelize = require('../config/database');


const todolist = sequelize.define('todolists', {
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
    unique: true,
  },
  to_do: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  createdAt: {
    type: Sequelize.DATE,
  },
  updatedAt: {
    type: Sequelize.DATE,
  },
}, {
  underscored: true,
  freezeTableName: true,
});

module.exports = todolist;
