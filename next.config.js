const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const webpack = require('webpack')
const path = require('path')

module.exports = withPlugins([[withImages]], {
  trailingSlash: false,
  webpack(config, options) {
    config.resolve.modules.push(path.resolve('./'))
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve('./ncomponents'),
      '@public': path.resolve('./public'),
      '@redux': path.resolve('./redux'),
      '@utilts': path.resolve('./utilts'),
      '@config': path.resolve('./userConfig'),
    }
    return config
  },
})
