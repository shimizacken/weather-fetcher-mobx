const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSASS = new ExtractTextPlugin('portal.css');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
});

module.exports = {
  entry: [
    'babel-polyfill',
    'whatwg-fetch',
    './src/app.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.webpack.js', '.web.js', '.json'],
    modules: ['node_modules']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: extractSASS.extract({
            fallback: ['style-loader'], // translates CSS into CommonJS
            use: [
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        localIdentName: '[local]--[hash:base64:5]',
                        sourceMap: true,
                        minimize: true,
                        camelCase: true
                    }
                },
                'sass-loader'
            ] // compiles sass to CSS
        })
      }
    ]
  },
  plugins: [
    extractSASS,
    htmlPlugin
  ]
};