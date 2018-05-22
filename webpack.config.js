/* global __dirname, require, module*/

const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const path = require('path');
const env = require('yargs').argv.env; // use --env with webpack 2
const pkg = require('./package.json');

let libraryName = 'koa-browser';

let plugins = [], outputFile;

if (env.build) {
  // plugins.push(new UglifyJsPlugin({ minimize: true }));
  plugins.push(new UglifyJsPlugin());
  outputFile = libraryName + '.min.js';
} else {
  outputFile = libraryName + '.js';
}

const amdConfig = {
  entry: __dirname + '/src/koa-app.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist/amd',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'amd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js']
  },
  plugins: plugins
};

const commonjsConfig = {
  entry: __dirname + '/src/koa-app.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist/commonjs',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'commonjs',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js']
  },
  plugins: plugins
};

const commonjs2Config = {
  entry: __dirname + '/src/koa-app.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist/commonjs2',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'commonjs2',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js']
  },
  plugins: plugins
};

const umdConfig = {
  entry: __dirname + '/src/koa-app.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist/umd',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js']
  },
  plugins: plugins
};

// module.exports = amdConfig;
module.exports = [amdConfig, commonjsConfig, commonjs2Config, umdConfig];