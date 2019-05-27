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
    './index': './src/index.js',
    './style': './src/style.css',
    './theme-template': './src/theme.css'
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
                exclude: [/node_modules/, /evokit-(.*\/)/],
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                postcssImport(),
                                postcssMqpacker(),
                            ]
                        }
                    }
                ]
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
        'prop-types': {
            root: 'PropTypes',
            commonjs: 'prop-types',
            commonjs2: 'prop-types',
            amd: 'prop-types',
        }
    },
    plugins: [
        new FixStyleOnlyEntriesPlugin(),
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
