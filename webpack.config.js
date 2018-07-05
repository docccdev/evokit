var path = require('path');
var PeerDepsExternalsPlugin = require('peer-deps-externals-webpack-plugin');
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
var postcssMqpacker = require("css-mqpacker");

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

// 1. Обратить внимание на модификаторы size
// 2. Изменились переменные цвета текста red => first, yellow => second
// 3. Добавились новые модификаторы, найти и задокументировать

module.exports = {
    entry: entryList,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]/index.js',
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
                                //     variables: {
                                //         // base
                                //         EKStepSize: '5px',
                                //         EKLineHeightRead: '1.5em',
                                //         EKBorderRadius: '10px',
                                //         EKBorderColor: '#dde8f0',
                                //         // body
                                //         EKFontFamily: '\'Roboto\', Arial, sans-serif',
                                //         EKLineHeight: '1.3em',
                                //         EKFontWeight: '400',
                                //         EKFontSize: '13px',
                                //         EKColor: '#3c3c3c',
                                //         EKBackgroundColor: '#f7f7f7',
                                //         EKMinWidth: '1000px',
                                //         EKMaxWidth: '1200px',
                                //         EKPadding: '0 20px',
                                //         // font size
                                //         EKFontSizeH1: '24px',
                                //         EKFontSizeH2: '22px',
                                //         EKFontSizeH3: '20px',
                                //         EKFontSizeH4: '18px',
                                //         EKFontSizeH5: '16px',
                                //         EKFontSizeH6: '14px',
                                //         EKFontSizeFirst: '30px',
                                //         EKFontSizeSecond: '60px',
                                //         EKFontSizeThird: '90px',
                                //         // text colors
                                //         EKColorWhite: '#ffffff',
                                //         EKColorBlack: '#000000',
                                //         EKColorLink: '#5e8fd5',
                                //         EKColorMuted: '#a0b0c7',
                                //         EKColorSuccess: '#33b600',
                                //         EKColorInfo: '#5e8fd5',
                                //         EKColorWarning: '#ff9600',
                                //         EKColorError: '#bb2914',
                                //         EKColorFirst: 'red', // red: #f55832
                                //         EKColorSecond: 'green', // yellow: #facd00
                                //         EKColorThird: 'blue',
                                //         // background color
                                //         EKBackgroundColorWhite: '#ffffff',
                                //         EKBackgroundColorBlack: '#000000',
                                //         EKBackgroundColorLink: '#ebf3f9',  // blue: #ebf3f9
                                //         EKBackgroundColorMuted: '#f7f7f7',  // gray: #f7f7f7
                                //         EKBackgroundColorSuccess: '#d0efcc',
                                //         EKBackgroundColorInfo: '#dde7f5',
                                //         EKBackgroundColorWarning: '#fcf1bd',
                                //         EKBackgroundColorError: '#efd2ce',
                                //         EKBackgroundColorFirst: 'red',
                                //         EKBackgroundColorSecond: 'green',
                                //         EKBackgroundColorThird: 'blue',
                                //         // border color
                                //         EKBorderColorWhite: '#ededed',
                                //         EKBorderColorBlack: '#ffffff',
                                //         EKBorderColorLink: '#d0e3f1',  // blue: #ebf3f9
                                //         EKBorderColorMuted: '#e5e5e5',  // gray: #f7f7f7
                                //         EKBorderColorSuccess: '#b7e6b1',
                                //         EKBorderColorInfo: '#c1d4ed',
                                //         EKBorderColorWarning: '#faea9b',
                                //         EKBorderColorError: '#e6b9b3',
                                //         EKBorderColorFirst: 'red',
                                //         EKBorderColorSecond: 'green',
                                //         EKBorderColorThird: 'blue',
                                //     }
                                // }),
                                // postcsscustomMedia({
                                //     extensions: {
                                //         EKMediaSmall: 'only screen and (min-width: 480px)',
                                //         EKMediaMedium: 'only screen and (min-width: 768px)',
                                //         EKMediaLarge: 'only screen and (min-width: 960px)',
                                //         EKMediaXlarge: 'only screen and (min-width: 1200px)',
                                //         EKMediaXxlarge: 'only screen and (min-width: 1400px)',
                                //         EKMediaXxxlarge: 'only screen and (min-width: 1600px)'
                                //     }
                                // }),
                                postcssMqpacker()
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
