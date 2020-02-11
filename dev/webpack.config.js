const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const postcssPresetEnv = require('postcss-preset-env');
const postcssImport = require('postcss-import');
const babelConfig = require('../config/babel.config.js');

module.exports = {
    mode: 'development',
    entry: './dev/index.js',
    output: {
        path: path.resolve(__dirname, 'dev/dist')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    { loader: 'babel-loader', options: babelConfig },
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                postcssImport(),
                                postcssPresetEnv({
                                    stage: 1,
                                    preserve: false
                                }),
                            ],
                        }
                    },
                ],
            },
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    plugins: [new HtmlWebpackPlugin()],
    resolve: {
        extensions: ['.js', '.jsx']
    }
};
