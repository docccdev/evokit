var path = require('path');
var PeerDepsExternalsPlugin = require('peer-deps-externals-webpack-plugin');
var PROJECT_DEPS = process.env.PROJECT_DEPS || __dirname;
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var postcssEach = require('postcss-each');
var postcssConditionals = require('postcss-conditionals');
var postcssNested = require('postcss-nested');
var postcssCustomProperties = require('postcss-custom-properties');

var extractSTYL = new ExtractTextPlugin('[name].css');

var entryList = {
    'index':          path.resolve(__dirname, 'src/index.js'),
    'Box/index':      path.resolve(__dirname, 'src/Box'),
    'Panel/index':    path.resolve(__dirname, 'src/Panel'),
    'Grid/index':     path.resolve(__dirname, 'src/Grid'),
    'List/index':     path.resolve(__dirname, 'src/List'),
    'Link/index':     path.resolve(__dirname, 'src/Link'),
    'Picture/index':  path.resolve(__dirname, 'src/Picture'),
    'Text/index':     path.resolve(__dirname, 'src/Text'),
    'Line/index':     path.resolve(__dirname, 'src/Line'),
    'Image/index':    path.resolve(__dirname, 'src/Image'),
    'Tags/index':     path.resolve(__dirname, 'src/Tags'),
};

module.exports = {
    entry: entryList,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        libraryTarget: 'umd',
    },
    module: {
        loaders: [
            {
                test: /(\.jsx|\.js)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.sss$/,
                use: extractSTYL.extract([
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    {
                        loader: 'postcss-loader',
                        options: {
                            parser: 'sugarss',
                            plugins: [
                                // postcssCustomProperties({
                                //     preserve: 'computed',
                                //     warnings: true,
                                //     variables: {
                                //         EKLineColor: '#dde8f0',
                                //         EKStepSize: '5px'
                                //     }
                                // }),
                                postcssEach(),
                                postcssConditionals(),
                                postcssNested(),
                            ]
                        }
                    }
                ])
            },
        ],
    },
    plugins: [
        new PeerDepsExternalsPlugin(),
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
