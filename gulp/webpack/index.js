import path from 'path'
import config from '../config'
import loaders from './webpack.loaders'
import plugins from './webpack.plugins'

export default {

  context: path.resolve(config.src),

  resolve: {
    root: [
      path.resolve(config.src),
      path.resolve('./node_modules/'),
    ],
    alias: {},
    extensions: ['', '.js']
  },

  output: {
    filename: 'index.js',
    libraryTarget: "umd"
  },

  module: {
    loaders: loaders,
  },

  plugins: plugins

}
