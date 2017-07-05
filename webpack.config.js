var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        doc: './doc_src/styl/bundles/doc.styl',
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
            './doc_src/styl',
            './src/styl',
        ],
        extensions: ['.styl'],
    },
    plugins: [
        new ExtractTextPlugin('./doc_src/__root/css/[name].css'),
    ]
};
