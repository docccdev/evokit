var postcssPresetEnv = require('postcss-preset-env');
var postcssImport = require('postcss-import');

module.exports = {
  mode: 'development',
  entry: './index.js',
  module: {
    rules: [
      {
          test: /\.css$/,
          use: [
               {
                  loader: 'style-loader'
               },
               {
                  loader: 'css-loader',
                  options: {
                    importLoaders: 1,
                    modules: true,
                    localIdentName: '[name]__[local]--[hash:base64:5]'
                  }
               },
               {
                  loader: 'postcss-loader',
                  options: {
                    plugins: [
                      postcssImport(),
                      postcssPresetEnv({
                        stage: 0,
                        browsers: 'last 5 versions',
                        features: {
                            'custom-properties': {
                                preserve: false,
                            },
                            'custom-media-queries': {
                                preserve: false,
                            },
                        },
                      })
                    ]
                  }
                }
          ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          }
        ]
      }
    ]
  }
};
