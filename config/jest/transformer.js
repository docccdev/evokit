var babelJest = require('babel-jest');
var babelConfig = require('../babel.config.js');

module.exports = babelJest.createTransformer(babelConfig);
