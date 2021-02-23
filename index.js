const express = require('express');
const { Sequelize } = require('sequelize');
const routes = require('./config/routes/Routes');
const mapRoutes = require('express-routes-mapper');


const config = require('./config');

const mappedRoutes = mapRoutes(config.routes, 'controllers/');


const app = express();

// const sequelize = new Sequelize({
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     dialect: 'mysql',
//     "port": "8889"

//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000,
//     }
//   });

//   const testing = async () => {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//       } catch (error) {
//         console.error('Unable to connect to the database:', error);
//       }
//   }
//   testing();
app.use(express.urlencoded({
    extended: false
}));


app.get('/', (req, res) => res.send("hello"));

app.use('/api', mappedRoutes);

const port = 3306;

app.listen(port, () => {
    console.log(`App listening on port ! ${port}`);
});