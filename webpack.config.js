var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        doc: path.resolve(__dirname, 'doc_src/styl/bundles/doc.styl'),
        desktop: path.resolve(__dirname, 'src/styl/bundles/desktop.styl'),
        portable: path.resolve(__dirname, 'src/styl/bundles/portable.styl'),
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
            path.resolve(__dirname, 'doc_src/styl'),
            path.resolve(__dirname, 'src/styl'),
        ],
        extensions: ['.styl'],
    },
    plugins: [
        new ExtractTextPlugin('doc_src/__root/css/[name].css'),
    ]
};
