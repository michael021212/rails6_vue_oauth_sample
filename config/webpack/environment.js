const { environment } = require('@rails/webpacker')
const { VueLoaderPlugin } = require('vue-loader')
const vue = require('./loaders/vue')
const provide = require('./plugins/provide')
const aliasConfig = require('./alias')

environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
environment.loaders.prepend('vue', vue)
environment.plugins.prepend('provide', provide)
environment.config.merge(aliasConfig)
module.exports = environment
