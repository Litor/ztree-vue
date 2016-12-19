import path from 'path'
import config from '../config'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

var loaders = {}

loaders.js = {
  test: /\.js$/i,
  include: path.resolve(config.src),
  exclude: [/\/node_modules\//, /\/bower_components\//],
  loader: 'babel',
}

loaders.vue = {
  test: /\.vue$/i,
  include: [path.resolve(config.src)],
  loader: 'vue',
}

loaders.html = {
  test: /\.html$/i,
  loader: 'html',
}

loaders.css = {
  test: /\.(css)$/i,
  loader: ExtractTextPlugin.extract('style',
    'css-loader'
  ),
}

loaders.url = {
  test: /.*\.(gif|png|jpe?g|svg)$/i,
  loader: 'url',
  query: {
    limit: 0.01 * 1024,
    name: '[path][name].[ext]',
  },
}

export default [
  loaders.js,
  loaders.html,
  loaders.vue,
  loaders.css,
  loaders.url
]
