var path = require('path');
var PeerDepsExternalsPlugin = require('peer-deps-externals-webpack-plugin');
var PROJECT_DEPS = process.env.PROJECT_DEPS || __dirname;

module.exports = {
    entry: path.resolve(__dirname, 'src/es6/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        libraryTarget: 'umd',
    },
    module: {
        loaders: [
            {
                test: /(\.jsx|\.js)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new PeerDepsExternalsPlugin(),
    ],
    resolve: {
        modules: [path.resolve(PROJECT_DEPS, 'node_modules'), 'node_modules'],
        extensions: ['.js', '.jsx'],
    },
    resolveLoader: {
        modules: [path.resolve(PROJECT_DEPS, 'node_modules'), 'node_modules'],
    },
};
