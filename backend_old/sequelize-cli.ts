import { resolve } from 'path';

module.exports = {
  'config': resolve('src/config/database.ts'),
  'migrations-path': resolve('src/migrations'),
  'seeders-path': resolve('src/seeders'),
  'models-path': resolve('src/models')
};
