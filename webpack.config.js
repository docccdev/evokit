var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var babelConfig = require('./config/babel.config.js');

module.exports = {
    mode: 'development',
    entry: './dev/index.js',
    output: {
        path: path.resolve(__dirname, 'dev/dist')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    { loader: 'babel-loader', options: babelConfig },
                ],
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    plugins: [new HtmlWebpackPlugin()],
    resolve: {
        extensions: ['.js', '.jsx']
    }
};
