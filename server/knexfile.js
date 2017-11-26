// Update with your config settings.
const config = require('../config');

module.exports = {
  
    development: {
      client: 'postgres',
      connection: config.DB_URI,
      migrations: {
        directory: config.rootFolder + '/db/migrations',
      },
      seeds: {
        directory: config.rootFolder + '/db/seeds'
      }
    },
  
    production: {
      client: 'postgres',
      connection: config.DB_URI,
      migrations: {
        directory: config.rootFolder + '/db/migrations',
      },
      seeds: {
        directory: config.rootFolder + '/db/seeds'
      }
    }
  
  };