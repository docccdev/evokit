var makeWebpackConfig = require('../../config/webpack.config.js');
var makePostcssConfig = require('../../config/postcss.config.js');

const postcssConfig = makePostcssConfig('./src/style.sss', __dirname,
{
    '(--ek-line-media-small)': 'small',
    '(--ek-line-media-medium)': 'medium',
    '(--ek-line-media-large)': 'large',
    '(--ek-line-media-wide)': 'wide',
    '(--ek-line-media-huge)': 'huge'
});

module.exports = makeWebpackConfig('EvoKitLine', __dirname, {
    index: './src/index.js',
    style: './src/style.sss',
    theme: './src/theme.sss'
}, postcssConfig);
