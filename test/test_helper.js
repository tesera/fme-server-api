const _ = require('lodash');

// For testing purposes, lets set the timezone so
// that it doesn't have different results on codeship
process.env.TZ = 'America/Edmonton'

// Suppress logging messages
process.env.LOG_LEVEL = 'error'

module.exports = require('../lib/fme_server_api');
