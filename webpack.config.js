const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const postcssPresetEnv = require('postcss-preset-env');
const postcssImport = require('postcss-import');
const babelConfig = require('./config/babel.config.js');

module.exports = {
    mode: 'production',
    entry: {
        theming: './src/theming/index.jsx',
        dev: './src/dev/index.jsx',
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].[contenthash].js',
        publicPath: '/public'
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
                            importLoaders: 1,
                            modules: {
                                localIdentName: '[local]',
                            }
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
        contentBase: path.join(__dirname),
        compress: true,
        port: 8080
    },
    plugins: [
        new HtmlWebpackPlugin({
            chunks: ['theming'],
            filename: 'theming.html'
        }),
        new HtmlWebpackPlugin({
            chunks: ['dev'],
            filename: 'dev.html'
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    performance : {
        hints : false,
    },
    stats: {
        children: false,
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                },
            }
        }
    },
    node: {
        fs: 'empty',
        module: 'empty'
    }
};
