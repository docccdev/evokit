/* eslint-disable global-require */

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./dist/evokit.min.js');
} else {
    module.exports = require('./dist/evokit.js');
}
