var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');

var babelConfig = require('./babel.config.js');

module.exports = function(libName, libPath, entry, postcssConfig) {
    return {
        mode: 'production',
        entry: entry,
        output: {
            library: libName,
            path: libPath,
            filename: '[name].js',
            libraryTarget: 'umd',
            globalObject: 'this'
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    use: [
                        { loader: 'babel-loader', options: babelConfig },
                        'eslint-loader',
                    ],
                    exclude: /node_modules/
                },
                {
                    test: /\.sss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        { loader: 'css-loader', options: { importLoaders: 1 }},
                        { loader: 'postcss-loader', options: postcssConfig },
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
                extensions: ['sss'],
                silent: true
            }),
            new MiniCssExtractPlugin({
                filename: '[name].css'
            }),
        ],
        stats: {
            entrypoints: false,
            children: false,
            modules: false,
            assetsSort: 'name'
        }
    };
};
