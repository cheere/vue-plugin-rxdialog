const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { webpackBanner, configVersion } = require('./util.config')

const LibName = 'rxdialog'

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, '..', 'src/index.js'),
  output: {
    path: path.resolve(__dirname, '..', 'lib'),
    publicPath: '/lib/',
    filename: LibName + '.js',
    library: LibName,
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine: true,
    globalObject: 'this',
    // globalObject: '',
  },
  devtool: "source-map",
  resolve: {
    extensions: ['.js', '.vue', '.jsx'],
  },
  module: {
    rules: [
      {
        // https://github.com/beautifulBoys/webpack-replace-loader
        test: /index\.js$/,
        use: [
          { loader: 'babel-loader' },
          {
            loader: 'webpack-replace-loader',
            options: {
              arr: [
                { search: '$version', replace: configVersion, attr: 'g' }
              ]
            }
          }
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }, {
        test: /\.css$/,
        loader: 'css-loader'
      }, {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      }]
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js',
      '@': path.resolve(__dirname, '..', 'src')
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.BannerPlugin(webpackBanner),
  ],
}