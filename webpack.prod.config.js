var app_root = 'src';
var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = require('./webpack.config.js');    // inherit from the main config file

// disable the hot reload
module.exports.entry = [
    'babel-polyfill',
    __dirname + '/' + app_root + '/index.js'
];

// module.exports.module.loaders[1] = {
//     test: /\.styl/,
//     loader: ExtractTextPlugin.extract('css-loader!stylus-loader')
// };
//
// module.exports.plugins.push(
//     new ExtractTextPlugin('../main.css')
// );
//
// //
// // // production env
// module.exports.plugins.push(
//   new webpack.DefinePlugin({
//     'process.env': {
//       NODE_ENV: JSON.stringify('production'),
//     }
//   })
// );
// //
// // compress the js file
module.exports.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    comments: false,
    compressor: {
      warnings: false
    }
  })
);
