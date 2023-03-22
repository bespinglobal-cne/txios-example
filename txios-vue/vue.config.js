const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 3001,
    proxy: {
      "/runner": {
        target: "https://runner.msamaker.bespinglobal.com",
        changeOrigin: true,
        secure: false,
        ws: true
      }    
    }
  }
})