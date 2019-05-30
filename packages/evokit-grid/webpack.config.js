var makeWebpackConfig = require('../../config/webpack.config.js');
var makePostcssConfig = require('../../config/postcss.config.js');

const postcssConfig = makePostcssConfig('./src/style.sss', __dirname,
{
    '(--ek-grid-media-small)': 'small',
    '(--ek-grid-media-medium)': 'medium',
    '(--ek-grid-media-large)': 'large',
    '(--ek-grid-media-wide)': 'wide',
    '(--ek-grid-media-huge)': 'huge'
});

module.exports = makeWebpackConfig('EvoKitGrid', __dirname, {
    index: './src/index.js',
    style: './src/style.sss',
    theme: './src/theme.sss'
}, postcssConfig);
