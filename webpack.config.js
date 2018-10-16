var path = require('path');
var PROJECT_DEPS = process.env.PROJECT_DEPS || __dirname;
var ExtractTextPlugin = require('extract-text-webpack-plugin');
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

var extractSTYL = new ExtractTextPlugin('[name]/style.css');

var entryList = {
    '.':        path.resolve(__dirname, 'src/index.js'),
    'Body':     path.resolve(__dirname, 'src/Body'),
    'Box':      path.resolve(__dirname, 'src/Box'),
    'Grid':     path.resolve(__dirname, 'src/Grid'),
    'List':     path.resolve(__dirname, 'src/List'),
    'Link':     path.resolve(__dirname, 'src/Link'),
    'Picture':  path.resolve(__dirname, 'src/Picture'),
    'Text':     path.resolve(__dirname, 'src/Text'),
    'Line':     path.resolve(__dirname, 'src/Line'),
    'Image':    path.resolve(__dirname, 'src/Image'),
};

module.exports = {
    mode: 'development',
    entry: entryList,
    output: {
        library: 'EvoKit',
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]/index.js',
        libraryTarget: 'umd',
        globalObject: 'this'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.sss$/,
                use: extractSTYL.extract([
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
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
                                postcssMqpacker()
                            ]
                        }
                    }
                ])
            },
        ],
    },
    externals: {
        'react': {
            root: 'React',
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react'
        },
        'classnames': {
            root: 'classNames',
            commonjs: 'classnames',
            commonjs2: 'classnames',
            amd: 'classnames'
        },
        'prop-types': {
            root: 'PropTypes',
            commonjs: 'prop-types',
            commonjs2: 'prop-types',
            amd: 'prop-types'
        }
    },
    plugins: [
        extractSTYL,
    ],
    resolve: {
        modules: [path.resolve(PROJECT_DEPS, 'node_modules'), 'node_modules'],
        extensions: ['.js', '.sss'],
    },
    resolveLoader: {
        modules: [path.resolve(PROJECT_DEPS, 'node_modules'), 'node_modules'],
    },
    stats: {
        colors: true,
        entrypoints: false,
        children: false,
        modules: false,
    }
};
