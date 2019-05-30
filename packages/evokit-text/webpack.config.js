var makeWebpackConfig = require('../../config/webpack.config.js');
var makePostcssConfig = require('../../config/postcss.config.js');

const postcssConfig = makePostcssConfig('./src/style.sss', __dirname,
{
    '(--ek-text-media-small)': 'small',
    '(--ek-text-media-medium)': 'medium',
    '(--ek-text-media-large)': 'large',
    '(--ek-text-media-wide)': 'wide',
    '(--ek-text-media-huge)': 'huge'
});

module.exports = makeWebpackConfig('EvoKitText', __dirname, {
    index: './src/index.js',
    style: './src/style.sss',
    theme: './src/theme.sss'
}, postcssConfig);
