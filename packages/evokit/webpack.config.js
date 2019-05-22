var path = require('path');
var PROJECT_DEPS = process.env.PROJECT_DEPS || __dirname;
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');

var postcssEach = require('postcss-each');
var postcssFor = require('postcss-for');
var postcssMath = require('postcss-math');
var postcssConditionals = require('postcss-conditionals');
var postcssNested = require('postcss-nested');
var postcssCustomProperties = require('postcss-custom-properties');
var postcsscustomMedia = require('postcss-custom-media');
var postcssMixins = require('postcss-mixins');
var postcssImport = require('postcss-import');
var postcssPrefixer = require('postcss-prefixer');
var postcssMqpacker = require('css-mqpacker');

var evokitConfig = require('./evokit.config.js');

const ENTRY_LIST = {
    './index': path.resolve(__dirname, 'index'),
    './style': path.resolve(__dirname, 'style'),
    './theme-template': path.resolve(__dirname, 'theme-template'),
};

module.exports = {
    mode: 'development',
    entry: ENTRY_LIST,
    output: {
        library: 'EvoKit',
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        libraryTarget: 'umd',
        globalObject: 'this'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader', 'eslint-loader'],
                exclude: [
                    /node_modules/,
                    /evokit-text/
                ],
            },
            {
                test: /\.sss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            parser: 'sugarss',
                            plugins: [
                                postcssImport(),
                                postcssMixins(),
                                postcssEach(),
                                postcssFor(),
                                postcssMath(),
                                postcssConditionals(),
                                postcssNested(),
                                // postcssCustomProperties({
                                //     preserve: false,
                                //     importFrom: [evokitConfig]
                                // }),
                                // postcsscustomMedia({
                                //     preserve: false,
                                //     importFrom: [evokitConfig]
                                // }),
                                postcssPrefixer({
                                    prefix: 'ek-'
                                }),
                                postcssMqpacker(),
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ],
    },
    externals: {
        'react': {
            root: 'React',
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
        },
        'classnames': {
            root: 'classNames',
            commonjs: 'classnames',
            commonjs2: 'classnames',
            amd: 'classnames',
        },
        'prop-types': {
            root: 'PropTypes',
            commonjs: 'prop-types',
            commonjs2: 'prop-types',
            amd: 'prop-types',
        }
    },
    plugins: [
        new FixStyleOnlyEntriesPlugin({
            extensions: ['sss'],
            silent: true,
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
    resolve: {
        modules: [path.resolve(PROJECT_DEPS, 'node_modules'), 'node_modules'],
        extensions: ['.js', '.jsx', '.sss'],
    },
    resolveLoader: {
        modules: [path.resolve(PROJECT_DEPS, 'node_modules'), 'node_modules'],
    },
    stats: {
        colors: true,
        entrypoints: false,
        children: false,
        modules: false,
        assetsSort: 'name',
    }
};
