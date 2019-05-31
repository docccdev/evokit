var babelConfig = require('../../config/babel.config.js');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        library: 'EvoKit',
        path: __dirname,
        filename: 'index.js',
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
    stats: {
        entrypoints: false,
        children: false,
        modules: false,
    }
};
