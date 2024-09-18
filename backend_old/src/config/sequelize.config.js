const path = require('path');

module.exports = {
  development: {
    dialect: 'mysql',
    username: 'latihan1',
    password: 'latihan1',
    database: 'siloam',
    host: 'localhost',
    port:5432,
    logging: console.log,
    define: {
      underscored: true,
    },
  },
  production: {
    dialect: 'mysql',
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    port:5432,
    logging: false,
    define: {
      underscored: true,
    },
  },
};
