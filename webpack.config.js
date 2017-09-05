module.exports.getConfig = function(type) {
  var isDev = type === 'development';

  if (!isDev) {
      const webpack = require('webpack');
      const path = require('path');
  }

  var config = {
    entry: [
        isDev ? './app/scripts/main.js' : './app/scripts/main.js',
    ],
    module: {
      loaders: [
        { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel', query: { presets: ['react', 'es2015'] } }
      ]
    },
    resolve: {
      extensions: ['.jsx','.js', '.scss', '.styl']
    },
    output: {
      path: isDev ? __dirname : path.join(__dirname, '/dist'),
      publicPath: '/',
      filename: 'main.js'
    },
    devtool: 'cheap-eval-source-map',
    devServer: {
      contentBase: './dist',
      hot: true
    },
    plugins: {}
  };

    if(isDev){
        config.devtool = 'eval';
    } else {
        config.plugins = [
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin()
        ]
    }

    return config;
};
