import Webpack from 'webpack'
import Config from 'webpack-config'
import {directories} from '../package.json'
import {join, resolve} from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default new Config()
  .extend(join(directories.webpack, 'base.js'))
  .merge({
    output: {
      filename: '[name].min.js?[hash]'
    },
    plugins: [
      new Webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
      new Webpack.optimize.OccurrenceOrderPlugin(true),
      new Webpack.optimize.UglifyJsPlugin({
        mangle: true,
        output: {
          comments: false
        },
        compress: {
          warnings: false
        }
      }),
      new HtmlWebpackPlugin({
        title: 'ChatBot Frontend',
        template: resolve(directories.src, 'index.html'),
        excludeChunks: ['chatBot'],
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true
        }
      })
    ]
  })
