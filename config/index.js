const routes = require('./routes/Routes');

const config = {
  migrate: true,
  routes,
  port: process.env.PORT || '2017',
};

module.exports = config;
