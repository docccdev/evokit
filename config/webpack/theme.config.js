var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
var postcssEach = require('postcss-each');
var postcssFor = require('postcss-for');
var postcssMath = require('postcss-math');
var postcssConditionals = require('postcss-conditionals');
var postcssNested = require('postcss-nested');
var postcssMixins = require('postcss-mixins');
var postcssImport = require('postcss-import');
var postcssPrefixer = require('postcss-prefixer');
var postcssMqpacker = require('css-mqpacker');

module.exports = function(dirName) {
    return {
        mode: 'production',
        entry: path.resolve(dirName, 'src/theme.sss'),
        output: {
            path: dirName,
            filename: 'theme.js',
        },
        module: {
            rules: [
                {
                    test: /\.sss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
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
                                plugins: {
                                    parser: 'sugarss',
                                    plugins: [
                                        postcssImport(),
                                        postcssMixins(),
                                        postcssEach(),
                                        postcssFor(),
                                        postcssMath(),
                                        postcssConditionals(),
                                        postcssNested(),
                                        postcssPrefixer({
                                            prefix: 'ek-'
                                        }),
                                        postcssMqpacker()
                                    ]
                                }
                            }
                        },
                    ]
                }
            ]
        },
        plugins: [
            new FixStyleOnlyEntriesPlugin({
                extensions: ['sss'],
                silent: true
            }),
            new MiniCssExtractPlugin({
                filename: 'theme.css'
            }),
        ],
        stats: {
            entrypoints: false,
            children: false,
            modules: false,
        }
    };
};
