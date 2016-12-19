import webpack from 'webpack'
import config from '../config'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

var plugins = [
  new webpack.optimize.AggressiveMergingPlugin({
    moveToParents: true,
  }),

  new webpack.optimize.DedupePlugin(),

  new ExtractTextPlugin(
    './[name].css', {
      disable: true //config.isDevelope,
    }
  ),
]

config.isProduction && plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    mangle: {

    },
  })
)

export default plugins
