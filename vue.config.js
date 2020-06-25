module.exports = {
  lintOnSave: false,
  configureWebpack: {
    devServer: {
      proxy: {
        '/api': {
          target: 'https://citypark.tainan.gov.tw/App/parking.ashx',
          changeOrigin: true,
          ws: true
        }
      }
    }
  }
}
