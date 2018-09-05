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
var postcssMqpacker = require('css-mqpacker');

var evokitConfig = require('./evokit.config.js');

var extractSTYL = new ExtractTextPlugin('[name]/style.css');

var entryList = {
    '.':        path.resolve(__dirname, 'src/index.js'),
    'Body':     path.resolve(__dirname, 'src/Body'),
    'Box':      path.resolve(__dirname, 'src/Box'),
    'Panel':    path.resolve(__dirname, 'src/Panel'),
    'Grid':     path.resolve(__dirname, 'src/Grid'),
    'List':     path.resolve(__dirname, 'src/List'),
    'Link':     path.resolve(__dirname, 'src/Link'),
    'Picture':  path.resolve(__dirname, 'src/Picture'),
    'Text':     path.resolve(__dirname, 'src/Text'),
    'Line':     path.resolve(__dirname, 'src/Line'),
    'Image':    path.resolve(__dirname, 'src/Image'),
    'Tags':     path.resolve(__dirname, 'src/Tags'),
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
                test: /(\.jsx|\.js)$/,
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
                                //     preserve: 'computed',
                                //     warnings: true,
                                //     variables: evokitConfig.variables
                                // }),
                                // postcsscustomMedia({
                                //     extensions: evokitConfig.extensions
                                // }),
                                postcssMqpacker()
                            ]
                        }
                    }
                ])
            },
        ],
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'classnames': 'classNames',
        'prop-types': 'PropTypes'
    },
    plugins: [
        extractSTYL,
    ],
    resolve: {
        modules: [path.resolve(PROJECT_DEPS, 'node_modules'), 'node_modules'],
        extensions: ['.js', '.jsx', '.sss'],
    },
    resolveLoader: {
        modules: [path.resolve(PROJECT_DEPS, 'node_modules'), 'node_modules'],
    },
};
