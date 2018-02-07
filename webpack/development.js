import Config from 'webpack-config'
import {directories} from '../package.json'
import {join, resolve} from 'path'
import Webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import StylelintPlugin from 'stylelint-webpack-plugin'

export default new Config()
  .extend(join(directories.webpack, 'base.js'))
  .merge({
    entry: {
      'chatBot': resolve(directories.src, 'library', 'ChatBot.js'),
      'chatBot.module': [
        'react-hot-loader/patch',
        resolve(directories.src, 'development.js')
      ]
    },
    output: {
      pathinfo: true,
      filename: '[name].js?[hash]'
    },
    module: {
      rules: [{
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: ['eslint-loader'],
        enforce: 'pre'
      }, {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: ['react-hot-loader/webpack'],
        enforce: 'post'
      }]
    },
    devtool: 'eval',
    plugins: [
      new Webpack.HotModuleReplacementPlugin(),
      new StylelintPlugin(),
      new HtmlWebpackPlugin({
        title: 'ChatBot Frontend',
        template: resolve(directories.src, 'index.html')
      })
    ],
    devServer: {
      contentBase: [directories.src, directories.dist],
      port: 3000,
      compress: false,
      hot: true,
      noInfo: true,
      historyApiFallback: true,
      stats: {
        assets: false,
        cached: false,
        children: false,
        chunks: true,
        chunkModules: false,
        chunkOrigins: false,
        colors: true,
        errors: true,
        errorDetails: false,
        hash: true,
        modules: false,
        publicPath: true,
        reasons: false,
        source: true,
        timings: true,
        version: true,
        warnings: false
      }
    },
    node: {
      fs: "empty"
    }
  })
