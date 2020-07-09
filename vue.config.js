module.exports = {

	chainWebpack: config => {
    config.module.rule('pdf')
      .test(/\.pdf$/)
      .use('file-loader').loader('file-loader')
  },

  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(webp)$/i,
          use: [
            {
              loader: 'image-webpack-loader',
              options: {
                webp: {
                  quality: 80,
                  enabled: true
                }
              }
            }
          ]
        }
      ]
    }
  },

  devServer: {
  	inline: true,
  	port: 3000
  },

  publicPath: '',

}