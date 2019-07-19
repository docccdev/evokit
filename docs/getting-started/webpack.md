[css-variable]: //caniuse.com/#feat=css-variables
[css-variable-usage]: //w3schools.com/css/css3_variables.asp
[postcss]: //github.com/postcss/postcss
[postcss-preset-env]: //github.com/csstools/postcss-preset-env
[postcss-import]: //github.com/postcss/postcss-import
[postcss-loader]: //github.com/postcss/postcss-loader

# Webpack

> The blocks styles use [css-variable] and will work in all modern browsers. If you need to support more old browsers such as Interner Explorer 11 or lower, use a tool [postcss] with [postcss-preset-env] for transforming css into something most browsers can understand.

**webpack.config.js**

```js
var postcssImport = require('postcss-import');
var postcssPresetEnv = require('postcss-preset-env');

var CSS_LOADER = {
    loader: 'css-loader',
    options: {
        importLoaders: 1
    }
};

var POSTCSS_LOADER = {
    loader: 'postcss-loader',
    options: {
        plugins: [
            postcssImport(),
            postcssPresetEnv()
        ],
    },
};

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js'
    },
    output: {
        path: './dist'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', CSS_LOADER, POSTCSS_LOADER]
            }
        ]
    }
};

```

#### Postcss dependencies

- [postcss]
- [postcss-preset-env]
- [postcss-import]
- [postcss-loader]

```bash
npm install postcss postcss-preset-env postcss-import postcss-loader --save-dev
```
