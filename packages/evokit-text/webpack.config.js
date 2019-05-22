var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');

var LIBRARY_NAME = 'EvoKitText';
var ENTRY = {
    index: './src/index.js',
    style: './style.sss',
    theme: './theme-template.sss'
};

module.exports = {
    mode: 'production',
    entry: ENTRY,
    output: {
        library: LIBRARY_NAME,
        path: __dirname,
        filename: '[name].js',
        libraryTarget: 'umd',
        globalObject: 'this'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader', 'eslint-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.sss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { importLoaders: 1 }},
                    'postcss-loader'
                ]
            }
        ]
    },
    externals: {
        'react': {
            root: 'React',
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react'
        },
        'prop-types': {
            root: 'PropTypes',
            commonjs: 'prop-types',
            commonjs2: 'prop-types',
            amd: 'prop-types'
        }
    },
    plugins: [
        new FixStyleOnlyEntriesPlugin({
            extensions: ['sss']
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ],
    stats: {
        colors: true,
        entrypoints: false,
        children: false,
        modules: false,
        assetsSort: 'name'
    }
};
