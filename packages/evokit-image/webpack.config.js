var makeIndexConfig = require('../../config/webpack/index.config.js');
var makeStyleConfig = require('../../config/webpack/style.config.js');
var makeThemeConfig = require('../../config/webpack/theme.config.js');

module.exports = [
    makeIndexConfig(__dirname, 'EvoKitImage'),
    makeStyleConfig(__dirname, 'image'),
    makeThemeConfig(__dirname)
];
