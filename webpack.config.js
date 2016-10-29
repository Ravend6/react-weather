const path = require('path')
const webpack = require('webpack')

const NODE_ENV = process.env.NODE_ENV || 'development'
const IS_TEST = (NODE_ENV === 'test')

const clientDir = path.resolve(__dirname, 'client')
const publicDir = path.resolve(__dirname, 'public')
const excludeDirs = /(node_modules|bower_components)/

const config = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    clientDir + '/app.jsx',
    // './client/app.jsx',
  ],
  externals: {
    jquery: 'jQuery'
  },
  output: {
    path: publicDir,
    filename: 'dist/bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: excludeDirs,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      }, {
        test: /\.html$/,
        loader: 'raw',
        exclude: excludeDirs
      }, {
        test: /\.css$/,
        loader: 'style!css',
        exclude: excludeDirs
      }, {
        test: /\.scss$/,
        loader: 'style!css!sass',
        exclude: excludeDirs
      }, {
        test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
        loader: 'url?name=[path][name].[ext]',
        exclude: excludeDirs
      }
    ]
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    contentBase: publicDir,
    // proxy: {
    //   '*': 'http://localhost:3000'
    // }
  }
}

config.plugins.push(new webpack.ProvidePlugin({$: 'jquery', jQuery: 'jquery'}))

config.plugins.push(new webpack.DefinePlugin({
  'process.env': {
    'NODE_ENV': JSON.stringify(NODE_ENV),
    'IS_TEST': IS_TEST,
  }
}))

if (NODE_ENV === 'production') {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }))
  config.plugins.push(new webpack.optimize.OccurenceOrderPlugin(), new webpack.optimize.DedupePlugin())
  config.devtool = 'source-map'
}

module.exports = config
