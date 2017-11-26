const environment = process.env.NODE_ENV || 'development',
      config = require('../server/knexfile.js')[environment];

module.exports = require('knex')(config);