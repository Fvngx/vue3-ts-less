module.exports = {
  publicPath: process.env.NODE_ENV !== 'production' ? '/' : '/magicflu/html/tmc',
  chainWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.output.filename('[name].[hash].js').end()
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: ['./src/less/var.less']
    }
  },
  productionSourceMap: false,
  devServer: {
    port: 2022
  }
}
