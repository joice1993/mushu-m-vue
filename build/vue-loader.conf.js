'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  },
  postcss: [
    //自动添加前缀
    require('autoprefixer')({
      browsers: [
        "> 1%",
        "last 2 versions",
        "not ie <= 8"
      ]
    }),
    require('postcss-px-to-viewport')({
      viewportWidth: 375,
      viewportHeight: 667,
      //minPixelValue: 10, //最小px，不进行转换
      selectorBlackList: [/^.solid-line$/], //黑名单，此类名不会转换成vw单位
    })
  ]
}
