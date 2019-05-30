var makeWebpackConfig = require('../../config/webpack.config.js');
var makePostcssConfig = require('../../config/postcss.config.js');

const postcssConfig = makePostcssConfig('./src/style.sss', __dirname,
{
    '(--ek-list-media-small)': 'small',
    '(--ek-list-media-medium)': 'medium',
    '(--ek-list-media-large)': 'large',
    '(--ek-list-media-wide)': 'wide',
    '(--ek-list-media-huge)': 'huge'
});

module.exports = makeWebpackConfig('EvoKitList', __dirname, {
    index: './src/index.js',
    style: './src/style.sss',
    theme: './src/theme.sss'
}, postcssConfig);
