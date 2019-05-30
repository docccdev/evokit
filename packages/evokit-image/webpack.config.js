var makeWebpackConfig = require('../../config/webpack.config.js');
var makePostcssConfig = require('../../config/postcss.config.js');

const postcssConfig = makePostcssConfig('./src/style.sss', __dirname,
{
    '(--ek-image-media-small)': 'small',
    '(--ek-image-media-medium)': 'medium',
    '(--ek-image-media-large)': 'large',
    '(--ek-image-media-wide)': 'wide',
    '(--ek-image-media-huge)': 'huge'
});

module.exports = makeWebpackConfig('EvoKitImage', __dirname, {
    index: './src/index.js',
    style: './src/style.sss',
    theme: './src/theme.sss'
}, postcssConfig);
