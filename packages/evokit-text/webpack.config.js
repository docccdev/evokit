var makeWebpackConfig = require('../../config/webpack.config.js');

module.exports = makeWebpackConfig('EvoKitText', __dirname, {
    index: './src/index.js',
    style: './src/style.sss',
    theme: './src/theme.sss'
});
