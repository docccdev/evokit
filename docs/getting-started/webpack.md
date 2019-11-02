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
module.exports = {
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
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require('postcss-import')(),
                                require('postcss-preset-env')()
                            ]
                        }
                    }
                ]
            }
        ]
    }
};
```

## Postcss dependencies

- [postcss]
- [postcss-import]
- [postcss-loader]
- [postcss-preset-env]

```bash
npm install postcss postcss-import postcss-loader postcss-preset-env --save-dev
```
