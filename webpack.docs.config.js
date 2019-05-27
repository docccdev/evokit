var path = require('path');
var babelConfig = require('./config/babel.config.js');

module.exports = {
    mode: 'production',
    entry: './docs.js',
    output: {
        path: path.resolve(__dirname, 'docs/_media'),
        filename: 'docs.js'
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
            }
        ]
    },
    resolve: {
        alias: {
            React: 'react'
        }
    },
    devServer: {
        contentBase: path.join(__dirname, 'docs'),
        compress: true,
        port: 9000
    }
};
