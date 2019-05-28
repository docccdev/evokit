var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var babelConfig = require('./config/babel.config.js');

module.exports = {
    mode: 'production',
    entry: {
        docs: './docs.js'
    },
    output: {
        path: path.resolve(__dirname, 'docs/_media'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: babelConfig
                    },
                    'eslint-loader',
                ],
                exclude: [/node_modules/, /evokit/]
            },
            {
                test: /\.css$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader' ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    resolve: {
        alias: {
            React: 'react'
        }
    },
    devServer: {
        contentBase: path.join(__dirname, 'docs'),
        compress: true,
        port: 9000
    },
    performance: {
        hints: false
    },
    stats: {
        entrypoints: false,
        children: false,
        modules: false,
    }
};
