var postcssEach = require('postcss-each');
var postcssFor = require('postcss-for');
var postcssMath = require('postcss-math');
var postcssConditionals = require('postcss-conditionals');
var postcssNested = require('postcss-nested');
var postcssCustomProperties = require('postcss-custom-properties');
var postcsscustomMedia = require('postcss-custom-media');
var postcssMixins = require('postcss-mixins');
var postcssImport = require('postcss-import');
var postcssPrefixer = require('postcss-prefixer');
var postcssMqpacker = require('css-mqpacker');
// var evokitConfig = require('./evokit.config.js');

module.exports = {
    parser: 'sugarss',
    plugins: {
        parser: 'sugarss',
        plugins: [
            postcssImport(),
            postcssMixins(),
            postcssEach(),
            postcssFor(),
            postcssMath(),
            postcssConditionals(),
            postcssNested(),
            // postcssCustomProperties({
            //     preserve: false,
            //     importFrom: [evokitConfig]
            // }),
            // postcsscustomMedia({
            //     preserve: false,
            //     importFrom: [evokitConfig]
            // }),
            postcssPrefixer({
                prefix: 'ek-'
            }),
            postcssMqpacker()
        ]
    }
};
