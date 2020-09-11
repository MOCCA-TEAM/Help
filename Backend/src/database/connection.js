var knex = require('knex');
var configuration = require('../../knexfile');

var connection = knex(configuration.development);

module.exports = connection;