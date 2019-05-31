var path = require('path');
var babelConfig = require('../babel.config.js');

module.exports = function(dirName, moduleName) {
    return {
        mode: 'development',
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
            'evokit': {
                root: 'EvoKit',
                commonjs: 'evokit',
                commonjs2: 'evokit',
                amd: 'evokit'
            }
        },
        stats: {
            entrypoints: false,
            children: false,
            modules: false,
        }
    };
};
