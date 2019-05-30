var makeWebpackConfig = require('../../config/webpack.config.js');
var makePostcssConfig = require('../../config/postcss.config.js');

const postcssConfig = makePostcssConfig('./src/style.sss', __dirname,
{
    '(--ek-box-media-small)': 'small',
    '(--ek-box-media-medium)': 'medium',
    '(--ek-box-media-large)': 'large',
    '(--ek-box-media-wide)': 'wide',
    '(--ek-box-media-huge)': 'huge'
});

module.exports = makeWebpackConfig('EvoKitBox', __dirname, {
    index: './src/index.js',
    style: './src/style.sss',
    theme: './src/theme.sss'
}, postcssConfig);
