module.exports = function(env) {
    const isProd = env === 'production';

    return {
        mode: isProd ? 'production' : 'development',
        entry: './src/index',
        output: {
            library: 'EvoKitText',
            path: __dirname,
            filename: isProd ? 'evokit-text.min.js' : 'evokit-text.js',
            libraryTarget: 'umd',
            globalObject: 'this'
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    use: ['babel-loader', 'eslint-loader'],
                    exclude: /node_modules/,
                }
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
        resolve: {
            modules: ['node_modules'],
            extensions: ['.js', '.jsx', '.sss'],
        },
        resolveLoader: {
            modules: ['node_modules'],
        },
        stats: {
            colors: true,
            entrypoints: false,
            children: false,
            modules: false,
            assetsSort: 'name',
        }
    };
};
