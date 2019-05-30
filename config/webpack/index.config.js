var path = require('path');
var babelConfig = require('../babel.config.js');

module.exports = function(dirName, moduleName) {
    return {
        mode: 'production',
        entry: path.resolve(dirName, 'src/index.js'),
        output: {
            library: moduleName,
            path: dirName,
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
};

