import Webpack from 'webpack'
import Config, {environment} from 'webpack-config'
import {directories, dependencies} from '../package.json'
import {resolve} from 'path'
import Precss from 'precss'
import Autoprefixer from 'autoprefixer'

const env = environment.getOrDefault('env', 'development')
const ThemeConfig = require(`../config/${env}.json`)

let entry = {}

switch (ThemeConfig.mode) {
  case 'popup':
    entry = {
      'chatBot': [
        resolve(directories.src, 'library', 'ChatBot.js')
      ],
      'chatBot.module': [
        ...Object.keys(dependencies),
        resolve(directories.src, 'index.js')
      ]
    }
    break
  default:
  case 'modal':
    entry = {
      'chatBot.module': [
        ...Object.keys(dependencies),
        resolve(directories.src, 'library', 'ChatBotModule.js')
      ]
    }
    break
}

export default new Config().merge({
  entry: entry,
  output: {
    path: resolve(directories.dist),
    filename: 'chatBot.js'
  },
  module: {
    rules: [{
      test: /\.html$/i,
      exclude: /node_modules/,
      use: ['html-loader']
    }, {
      test: /\.(js|jsx)$/i,
      exclude: /node_modules/,
      use: ['babel-loader']
    }, {
      test: /\.css$/i,
      exclude: /node_modules/,
      use: ['style-loader', 'css-loader', {
        loader: 'postcss-loader',
        options: {
          plugins: [
            Precss(),
            Autoprefixer({browsers: ['last 2 versions']})
          ]
        }
      }]
    }, {
      test: /\.(scss|sass)$/i,
      exclude: /node_modules/,
      use: ['style-loader', 'css-loader', {
        loader: 'postcss-loader',
        options: {
          plugins: [
            Precss(),
            Autoprefixer({browsers: ['last 2 versions']})
          ]
        }
      }, 'sass-loader']
    }, {
      test: /\.(otf|eot|svg|ttf|woff)/,
      use: ['url-loader']
    }]
  },
  plugins: [
    new Webpack.DefinePlugin({
      CONFIG: JSON.stringify(ThemeConfig)
    })

  ]
})
