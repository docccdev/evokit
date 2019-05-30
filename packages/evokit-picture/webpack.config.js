var makeWebpackConfig = require('../../config/webpack.config.js');
var makePostcssConfig = require('../../config/postcss.config.js');

const postcssConfig = makePostcssConfig('./src/style.sss', __dirname,
{
    '(--ek-picture-media-small)': 'small',
    '(--ek-picture-media-medium)': 'medium',
    '(--ek-picture-media-large)': 'large',
    '(--ek-picture-media-wide)': 'wide',
    '(--ek-picture-media-huge)': 'huge'
});

module.exports = makeWebpackConfig('EvoKitPicture', __dirname, {
    index: './src/index.js',
    style: './src/style.sss',
    theme: './src/theme.sss'
}, postcssConfig);
