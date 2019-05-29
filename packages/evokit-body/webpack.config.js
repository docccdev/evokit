var makeWebpackConfig = require('../../config/webpack.config.js');
var makePostcssConfig = require('../../config/postcss.config.js');

const postcssConfig = makePostcssConfig('./src/style.sss', __dirname,
{
    '(--ek-body-media-small)': 'small',
    '(--ek-body-media-medium)': 'medium',
    '(--ek-body-media-large)': 'large',
    '(--ek-body-media-wide)': 'wide',
    '(--ek-body-media-huge)': 'huge'
});

module.exports = makeWebpackConfig('EvoKitBody', __dirname, {
    index: './src/index.js',
    style: './src/style.sss',
    theme: './src/theme.sss'
}, postcssConfig);
