var app_root = 'src';
var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
    __dirname + '/' + app_root + '/index.js',
  ],
  module: {
    loaders: [
      { test: /\.js?$/, loader: ['react-hot-loader', 'babel-loader'], exclude: /node_modules/ },
      { test:  /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' },
    ]
  },
  resolve: {
    extensions: ['.js','.styl']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: 'cheap-eval-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    new CleanWebpackPlugin(['bundle.js'], {
      root: __dirname + '/dist',
      verbose: true,
      dry: false, // true for simulation
    }),
  ]
};
