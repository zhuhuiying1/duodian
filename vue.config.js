const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // lintONSave: false,//关闭eslint
  // 全局引入mixins
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/base.scss";`
      },
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 100, // 换算的基数
            propList: ['*'] // 全部换算
          }),
          require('autoprefixer')({
            // 配置使用 autoprefixer
            // overrideBrowserslist: ['last 15 versions']
          })
        ]
      }
    }
  },
  // 代理,跨域服务器配置,/api开头自动找http://localhost:7001
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:7001'
      }
    }
  },
  // 配置webpack,排除外部文件打包
  // 使用amap地图,外部引入的js文件,不用这个会报错
  configureWebpack: {
    externals: {
      AMap: 'AMap',
      AMapUI: 'AMapUI'
    }
  }
})
