// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs')
const hotHost = process.env.VUE_APP_HOTRELOAD_SERVER_HOST
const hotPort = process.env.VUE_APP_HOTRELOAD_SERVER_PORT
const host = process.env.VUE_APP_SERVER_HOST
const port = process.env.VUE_APP_SERVER_PORT

module.exports = {
  publicPath: '',
  outputDir: 'www',
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      const tmp = args[0]
      tmp.template = 'src/index.html'
      tmp.favicon = 'src/assets/favicon.ico'
      return args
    })
    if (process.env.NODE_ENV === 'development') {
      config.output.filename('[name].[hash].js').end()
    }
  },
  productionSourceMap: false,
  configureWebpack: {
    devtool: 'source-map',
  },
  devServer: {
    index: 'index.html',
    host: hotHost,
    port: hotPort,
    overlay: {
      warnings: true,
      errors: true,
    },
    proxy: {
      '/api': {
        target: `${host}:${port}`,
        changeOrigin: true,
      },
    },
  },
}
