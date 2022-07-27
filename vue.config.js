const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //开启代理服务器
  devServer: {
    port:8081,
    open: true,
    // proxy: 'http://192.168.1.1:10030',
    proxy: {
      '/api': {
        target: 'http://192.168.1.1:10031',
        pathRewrite:{'^/api':''},
        ws: true,
        changeOrigin: true
      },
      '/appi': {
        target: 'http://192.168.1.1:10032',
        pathRewrite:{'^/appi':''},
        ws: true,
        changeOrigin: true
      }
    }
  },
})
