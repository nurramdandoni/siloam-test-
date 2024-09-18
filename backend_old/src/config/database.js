const { Sequelize } = require('sequelize-typescript');

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'latihan1',
  password: 'latihan1',
  database: 'siloam',
  models: [__dirname + '/../models'], // path ke models
});

module.exports = sequelize;
