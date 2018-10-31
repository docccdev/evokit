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

const THEMES_LIST = [
    'danger',
    'dark',
    'default',
    'info',
    'light',
    'minor',
    'muted',
    'primary',
    'reset',
    'second',
    'success',
    'warning',
]

function getThemesPath(blockName, blockPath) {
    const result = {};
    THEMES_LIST.forEach((themeName) => {
        const srcPath = `${blockPath}/${blockName}/themes/${themeName}`;
        const distPath = `${blockName}/theme.${themeName}`;
        result[distPath] = path.resolve(__dirname, srcPath);
    });
    return result;
}

const ENTRY_LIST = {
    'Body/index': path.resolve(__dirname, 'src/blocks/Body'),
    'Body/style':path.resolve(__dirname, 'src/blocks/Body/style'),
    ...getThemesPath('Body', 'src/blocks'),

    'Image/index': path.resolve(__dirname, 'src/blocks/Image'),
    'Image/style': path.resolve(__dirname, 'src/blocks/Image/style'),

    'Picture/index': path.resolve(__dirname, 'src/blocks/Picture'),
    'Picture/style': path.resolve(__dirname, 'src/blocks/Picture/style'),

    'Box/index': path.resolve(__dirname, 'src/blocks/Box'),
    'Box/style': path.resolve(__dirname, 'src/blocks/Box/style'),
    ...getThemesPath('Box', 'src/blocks'),

    'Grid/index': path.resolve(__dirname, 'src/blocks/Grid'),
    'Grid/style': path.resolve(__dirname, 'src/blocks/Grid/style'),
    ...getThemesPath('Grid', 'src/blocks'),

    'List/index': path.resolve(__dirname, 'src/blocks/List'),
    'List/style': path.resolve(__dirname, 'src/blocks/List/style'),
    ...getThemesPath('List', 'src/blocks'),

    'Link/index': path.resolve(__dirname, 'src/blocks/Link'),
    'Link/style': path.resolve(__dirname, 'src/blocks/Link/style'),
    ...getThemesPath('Link', 'src/blocks'),

    'Text/index': path.resolve(__dirname, 'src/blocks/Text'),
    'Text/style': path.resolve(__dirname, 'src/blocks/Text/style'),
    ...getThemesPath('Text', 'src/blocks'),

    'Line/index': path.resolve(__dirname, 'src/blocks/Line'),
    'Line/style': path.resolve(__dirname, 'src/blocks/Line/style'),
    ...getThemesPath('Line', 'src/blocks'),

    './index': path.resolve(__dirname, 'src'),
    './style': path.resolve(__dirname, 'src/style'),
    ...getThemesPath('.', 'src'),
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
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
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
        assetsSort: 'name',
    }
};
