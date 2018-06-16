var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        desktop: './src/styl/bundles/desktop.styl',
        portable: './src/styl/bundles/portable.styl',
    },
    output: {
        path: __dirname,
        filename: 'temp/[name]/[name]_styl.js',
    },
    module: {
        rules: [
            {
                test: /\.styl$/,
                loader: ExtractTextPlugin.extract([
                    'css-loader',
                    'postcss-loader',
                    'stylus-loader',
                ]),
                exclude: [/node_modules/]
            }
        ]
    },
    stats: {
        children: false
    },
    resolve: {
        modules: [
            './src/styl',
        ],
        extensions: ['.styl'],
    },
    plugins: [
        new ExtractTextPlugin('./docs/_media/css/[name].css'),
    ]
};
