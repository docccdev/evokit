var makeWebpackConfig = require('../../config/webpack.config.js');
var makePostcssConfig = require('../../config/postcss.config.js');

const postcssConfig = makePostcssConfig('./src/style.sss', __dirname,
{
    '(--ek-link-media-small)': 'small',
    '(--ek-link-media-medium)': 'medium',
    '(--ek-link-media-large)': 'large',
    '(--ek-link-media-wide)': 'wide',
    '(--ek-link-media-huge)': 'huge'
});

module.exports = makeWebpackConfig('EvoKitLink', __dirname, {
    index: './src/index.js',
    style: './src/style.sss',
    theme: './src/theme.sss'
}, postcssConfig);
