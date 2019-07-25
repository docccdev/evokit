var makeIndexConfig = require('../../config/webpack/index.config.js');
var makeStyleConfig = require('../../config/webpack/style.config.js');

module.exports = [
    makeIndexConfig(__dirname, 'EvoKitFlex'),
    makeStyleConfig(__dirname, 'flex')
];
